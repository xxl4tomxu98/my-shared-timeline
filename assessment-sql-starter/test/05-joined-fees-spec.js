const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { createClient } = require('./table-testing-utils');

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

describe('The fees SQL statement', () => {
  let client;
  let resultSet;
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
    } catch (e) {
      otherError = `Error trying to drop old tables: ${e.message}`;
      return;
    }

    const createSqlFileNames = [
      '01-create-customers-table.sql',
      '02-create-invoices-table.sql',
      '03-create-fees-table.sql',
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

    const insertSqlFileNames = [
      '05-insert-customers-data.sql',
      '06-insert-invoices-data.sql',
      '07-insert-fees-data.sql',
      '08-insert-expenses-data.sql',
    ];
    for (let insertSqlFileName of insertSqlFileNames) {
      try {
        const insertSqlPath = resolve(__dirname, '..', insertSqlFileName);
        const insertSql = await readFile(insertSqlPath, 'utf-8');
        await client.query(insertSql);
      } catch (e) {
        otherError = `Error running ${insertSqlFileName}: ${e.message}`;
        return;
      }
    }

    try {
      const queryPath = resolve(__dirname, '..', '09-joined-fees-query.sql');
      const querySql = await readFile(queryPath, 'utf-8');
      ({ rows: resultSet } = await client.query(querySql));
    } catch (e) {
      otherError = `Error running 09-joined-fees-query.sql: ${e.message}`;
    }
  });

  after(async () => {
    if (client) {
      client.end();
    }
  });

  it('returns three records', () => {
    if (stopTestOnError(client, otherError)) return;

    expect(resultSet).to.have.length(3);
  });

  it('has the last fee for "Riley Reeves" in the amount of 21.040 for a "Service" fee on invoice "E0M 3P9"', () => {
    if (stopTestOnError(client, otherError)) return;

    const lastOne = [resultSet[2]];
    const record = lastOne.find(x =>
      x.name === 'Riley Reeves' &&
      x.invoice_number === 'E0M 3P9' &&
      x.description === 'Service' &&
      x.amount === '21.040'
    );

    if (!record) {
      expect.fail('Could not find that record.');
    }
  });

  context('in the first two entries', () => {
    it('returns a fee for "Jarrod Newman" in the amount of 96.400 for a "Service" fee on invoice "W6Z 1B9"', () => {
      if (stopTestOnError(client, otherError)) return;

      const firstTwo = [resultSet[0], resultSet[1]];
      const record = firstTwo.find(x =>
        x.name === 'Jarrod Newman' &&
        x.invoice_number === 'W6Z 1B9' &&
        x.description === 'Service' &&
        x.amount === '96.400'
      );

      if (!record) {
        expect.fail('Could not find that record.');
      }
    });

    it('returns a fee for "Jarrod Newman" in the amount of 90.400 for a "Service" fee on invoice "R0T 8A7"', () => {
      if (stopTestOnError(client, otherError)) return;

      const firstTwo = [resultSet[0], resultSet[1]];
      const record = firstTwo.find(x =>
        x.name === 'Jarrod Newman' &&
        x.invoice_number === 'R0T 8A7' &&
        x.description === 'Service' &&
        x.amount === '90.400'
      );

      if (!record) {
        expect.fail('Could not find that record.');
      }
    });
  });
});
