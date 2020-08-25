const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { testForeignKey, testSerialPrimaryKey, testNumeric, testCharacterVaryingColumn, createClient } = require('./table-testing-utils');

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

describe('The expenses table', () => {
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
        '04-create-expenses-table.sql',
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
        await client.query('SELECT * FROM expenses');
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

      const isPrimaryKey = await testSerialPrimaryKey(client, 'expenses', 'id');
      if (!isPrimaryKey) {
        return expect.fail(`Table expenses does not appear to have a primary key named "id"`);
      }
    });

    it('has description column that allows 100 characters and only non-nullable values', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testCharacterVaryingColumn(client, 'expenses', 'description', 100, false, false);
      if (!good) {
        expect.fail('expenses.invoice_number does not appear to be a unique, non-nullable VARCHAR(20)');
      }
    });

    it('has number_of_units column that allows non-nullable numbers of precision 10 and scale 3', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testNumeric(client, 'expenses', 'number_of_units', 10, 3, false);
      if (!good) {
        expect.fail('expenses.number_of_units does not appear to be a non-nullable NUMERIC(10, 3)');
      }
    });

    it('has rate column that allows non-nullable numbers of precision 10 and scale 3', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testNumeric(client, 'expenses', 'rate', 10, 3, false);
      if (!good) {
        expect.fail('expenses.rate does not appear to be a non-nullable NUMERIC(10, 3)');
      }
    });

    it('has invoice_id column that is a non-nullable reference to invoices.id', async () => {
      if (stopTestOnError(client, otherError)) return;

      const good = await testForeignKey(client, 'expenses', 'invoice_id', 'invoices', 'id');
      if (!good) {
        expect.fail('expenses.invoice_id does not appear to be a non-nullable reference to invoices.id');
      }
    });
  });
});
