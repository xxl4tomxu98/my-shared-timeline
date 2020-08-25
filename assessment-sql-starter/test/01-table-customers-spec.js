const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { testSerialPrimaryKey, testCharacterVaryingColumn, createClient } = require('./table-testing-utils');

let uniqueNumber = 1;

function createUniqueString() {
  uniqueNumber += 1;
  return `value${uniqueNumber}`;
}

function stopTestOnError(client, createError, otherError) {
  if (!client) {
    expect.fail('Cannot connect to localhost database invoice_app_development with credentials invoice_app/invoice_app');
    return true;
  }
  if (createError) {
    expect.fail(`Error while running 01-create-customers-table.sql: ${createError.message}`);
    return true;
  }
  if (otherError) {
    expect.fail(otherError);
    return true;
  }
}

describe('The customers table', () => {
  context('when created', () => {
    let client;
    let createError;
    let otherError;
    before(async () => {
      try {
        client = createClient();
        await client.connect();
      } catch (e) {
        client = undefined;
        console.error(e);
      }

      try {
        await client.query('DROP TABLE IF EXISTS fees');
        await client.query('DROP TABLE IF EXISTS expenses');
        await client.query('DROP TABLE IF EXISTS invoices');
        await client.query('DROP TABLE IF EXISTS customers');

        const createSqlPath = resolve(__dirname, '../01-create-customers-table.sql');
        const createSql = await readFile(createSqlPath, 'utf-8');
        await client.query(createSql);
      } catch (e) {
        createError = e;
      }

      try {
        await client.query('SELECT * FROM customers');
      } catch (e) {
        otherError = e.message;
      }
    });

    after(async () => {
      if (client) {
        client.end();
      }
    });

    it('has id column that is primary key with SERIAL-like type', async () => {
      if (stopTestOnError(client, createError, otherError)) return;

      const isPrimaryKey = await testSerialPrimaryKey(client, 'customers', 'id');
      if (!isPrimaryKey) {
        expect.fail(`Table customers does not appear to have a primary key named "id"`);
      }
    });

    it('has name column that allows 50 characters and only non-nullable unique values', async () => {
      if (stopTestOnError(client, createError, otherError)) return;

      const good = await testCharacterVaryingColumn(client, 'customers', 'name', 50, false, true);
      if (!good) {
        expect.fail('customers.name does not appear to be a unique, non-nullable VARCHAR(50)');
      }
    });

    it('has contact_email column that allows 200 characters and only non-nullable unique values', async () => {
      if (stopTestOnError(client, createError, otherError)) return;

      const good = await testCharacterVaryingColumn(client, 'customers', 'contact_email', 200, false, true);
      if (!good) {
        expect.fail('customers.contact_email does not appear to be a unique, non-nullable VARCHAR(200)');
      }
    });
  });
});
