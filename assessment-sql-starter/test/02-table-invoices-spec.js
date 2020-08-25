const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { testForeignKey, testSerialPrimaryKey, testTimestamp, testCharacterVaryingColumn, createClient } = require('./table-testing-utils');

let uniqueNumber = 1;

function createUniqueString() {
  uniqueNumber += 1;
  return `value${uniqueNumber}`;
}

function stopTestOnError(client, otherError) {
  if (!client) {
    expect.fail('Cannot connect to localhost database invoice_app_development with credentials invoice_app/invoice_app. Check the stack trace.');
    return true;
  }
  if (otherError) {
    expect.fail(otherError);
    return true;
  }
}

describe('The invoices table', () => {
  context('when created', () => {
    let client;
    let createError;
    let otherError;
    let customerId;
    before(async () => {
      try {
        client = createClient();
        await client.connect();
      } catch (e) {
        client = undefined;
        console.error(e);
        return;
      }

      try {
        await client.query('DROP TABLE IF EXISTS fees');
        await client.query('DROP TABLE IF EXISTS expenses');
        await client.query('DROP TABLE IF EXISTS invoices');
        await client.query('DROP TABLE IF EXISTS customers');
      } catch (e) {
        otherError = `Error trying to drop old tables: ${e.message}`;
        return;
      }

      const createSqlFileNames = [
        '01-create-customers-table.sql',
        '02-create-invoices-table.sql',
      ];
      for (let createSqlFileName of createSqlFileNames) {
        try {
          const createSqlPath = resolve(__dirname, '..', createSqlFileName);
          const createSql = await readFile(createSqlPath, 'utf-8');
          await client.query(createSql);
        } catch (e) {
          otherError = `Error running ${createSqlFileName}: ${e.message}`;
          return;
        }
      }

      try {
        await client.query('SELECT * FROM invoices');
      } catch (e) {
        otherError = e.message;
        return;
      }
    });

    after(async () => {
      if (client) {
        client.end();
      }
    });

    it('has id column that is primary key with SERIAL-like type', async () => {
      if (stopTestOnError(client, otherError)) return;

      const isPrimaryKey = await testSerialPrimaryKey(client, 'invoices', 'id');
      if (!isPrimaryKey) {
        expect.fail(`Table invoices does not appear to have a primary key named "id"`);
      }
    });

    it('has invoice_number column that allows 20 characters and only non-nullable unique values', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testCharacterVaryingColumn(client, 'invoices', 'invoice_number', 20, false, true);
      if (!good) {
        expect.fail('invoices.invoice_number does not appear to be a unique, non-nullable VARCHAR(20)');
      }
    });

    it('has created_at column that allows non-nullable time stamps', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testTimestamp(client, 'invoices', 'created_at', false);
      if (!good) {
        expect.fail('invoices.created_at does not appear to be a non-nullable TIMESTAMP');
      }
    });

    it('has paid_on column that allows nullable time stamps', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testTimestamp(client, 'invoices', 'paid_on', true);
      if (!good) {
        expect.fail('invoices.created_at does not appear to be a nullable TIMESTAMP');
      }
    });

    it('has customer_id column that is a non-nullable reference to customers.id', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testForeignKey(client, 'invoices', 'customer_id', 'customers', 'id');
      if (!good) {
        expect.fail('invoices.customer_id does not appear to be a non-nullable reference to customers.id');
      }
    });
  });
});
