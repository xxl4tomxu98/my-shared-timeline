const { expect } = require('chai');
const moment = require('moment');
const { pause, loadModel, migrationsConfig, seedsConfig, moduleInitializationErrorMessage } = require('./test-utils');
const Runner = require('umzug');

function stopTest(message) {
  if (message) {
    expect.fail(message);
    return true;
  }
  return false;
}

async function testCreate(callback) {
  let succeeded = true;
  try {
    await callback();
  } catch (e) {
    succeeded = false;
  }
  return succeeded;
}

async function createModel(Model, object) {
  let instance = null;
  await testCreate(async () => {
    instance = await Model.create(object);
  });
  return instance;
}

let uniqueId = 0;
function str(n = -1) {
  uniqueId += 1;
  let str = `test${uniqueId}`;
  if (n === -1) {
    n = str.length;
  }
  while (str.length < n) {
    str += str;
  }
  return str.substring(0, n);
}

function j(o) {
  return `\n${JSON.stringify(o, null, 2)}`;
}

function email() {
  return `${str()}@example.com`;
}

function customerValues(o) {
  return {
    name: str(50),
    contactEmail: email(200),
    ...o
  };
}

function invoiceValues(o) {
  return {
    invoiceNumber: str(20),
    issuedOn: new Date(),
    paidOn: new Date(),
    ...o
  };
}

function feeValues(o) {
  return {
    description: str(100),
    amount: 10.4,
    ...o
  };
}

function expenseValues(o) {
  return {
    description: str(100),
    numberOfUnits: 10.5,
    rate: 100,
    ...o
  };
}

function formatDate(d) {
  if (!d) return null;
  const m = moment(d);
  m.add(-m.utcOffset(), 'm');
  return m.format('YYYY-MM-DD');
}

describe('The model', () => {
  let errorMessage;
  before(async () => {
    if (migrationsConfig && seedsConfig) {
      const migrator = new Runner(migrationsConfig);
      const seeder = new Runner(seedsConfig);
      try {
        await seeder.down({ to: 0 });
        await pause(0.25);
        await migrator.down({ to: 0 });
        await pause(0.25);
        await migrator.up();
        await pause(0.25);
        await seeder.up();
        await pause(0.25);
      } catch (e) {
        console.error(e);
        errorMessage = `Error running migrations or seeds. See stack trace above for more details. Error message: ${e.message}`;
      }
    } else {
      errorMessage = moduleInitializationErrorMessage;
    }
  });

  context('Customer', () => {

    it ('can eagerly fetch associated Invoice data', async () => {
      const { models, error } = loadModel([ 'Customer', 'Invoice' ]);
      if (stopTest(errorMessage || error)) return;

      const { Customer, Invoice } = models;

      const records = await Customer
        .findAll({ order: ['name'], where: { id: [ 1, 2 ] }, include: Invoice })
        .map(x => ({
          numberOfInvoices: x.Invoices.length
        }));

      expect(records[0]).to.have.property('numberOfInvoices', 3);
      expect(records[1]).to.have.property('numberOfInvoices', 1);
    });
  });

  context('Invoice', () => {
    let customerId = -1;
    let invoiceError;
    before(async () => {
      if (errorMessage) return;

      const { models, error } = loadModel('Customer');

      if (error) {
        invoiceError = `For Invoice tests, ${error}`;
        return;
      }

      const { Customer } = models;

      const values = customerValues();
      const customer = await createModel(Customer, values);
      if (customer) {
        customerId = customer.id;
      }

      if (!invoiceError && customerId === -1) {
        invoiceError = `Could not create a Customer for the Invoice tests with ${j(values)}`;
      }
    });

    it ('can eagerly fetch associated Customer data', async () => {
      const { models, error } = loadModel([ 'Customer', 'Invoice' ]);
      if (stopTest(errorMessage || invoiceError || error)) return;

      const { Customer, Invoice } = models;

      const records = await Invoice
        .findAll({ order: ['invoiceNumber'], where: { id: [ 1, 2, 3, 4 ] }, include: Customer })
        .map(x => ({
          name: x.Customer.name,
        }));

      expect(records[0]).to.eql({ name: 'Riley Reeves' });
      expect(records[1]).to.eql({ name: 'Jarrod Newman' });
      expect(records[2]).to.eql({ name: 'Jarrod Newman' });
      expect(records[3]).to.eql({ name: 'Jarrod Newman' });
    });

    it ('can eagerly fetch associated Fee and Expense data', async () => {
      const { models, error } = loadModel([ 'Fee', 'Invoice', 'Expense' ]);
      if (stopTest(errorMessage || invoiceError || error)) return;

      const { Fee, Invoice, Expense } = models;

      const records = await Invoice
        .findAll({ order: ['invoiceNumber'], where: { id: [ 1, 2, 3, 4 ] }, include: [Fee, Expense] })
        .map(x => ({
          numberOfFees: x.Fees.length,
          numberOfExpenses: x.Expenses.length
        }));

      expect(records[0]).to.eql({ numberOfFees: 1, numberOfExpenses: 1 });
      expect(records[1]).to.eql({ numberOfFees: 1, numberOfExpenses: 2 });
      expect(records[2]).to.eql({ numberOfFees: 1, numberOfExpenses: 1 });
      expect(records[3]).to.eql({ numberOfFees: 0, numberOfExpenses: 2 });
    });
  });

  context('Fee', () => {
    let invoiceId = -1;
    let feeError;
    before(async () => {
      if (errorMessage) return;

      const { models, error } = loadModel(['Customer', 'Invoice']);

      if (error) {
        feeError = `For Fee tests, ${error}`;
        return;
      }

      const { Customer, Invoice } = models;
      let customerId = -1;

      let values = customerValues();
      const customer = await createModel(Customer, values);
      if (customer) {
        customerId = customer.id;
      }
      if (!feeError && customerId === -1) {
        feeError = `Could not create a Customer for the Fee tests with ${j(values)}`;
      }

      values = invoiceValues({ customerId });
      const invoice = await createModel(Invoice, values);
      if (invoice) {
        invoiceId = invoice.id;
      }
      if (!feeError && invoiceId === -1) {
        feeError = `Could not create an Invoice for the Fee tests with ${j(values)}`;
      }
    });

    it ('exists and creates a good instance', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const values = feeValues({ invoiceId });
      const succeeded = await createModel(Fee, values);
      if (!succeeded) return expect.fail(`Could not create an Fee with ${j(values)}`);
    });

    it ('will fail to create with null values', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const attempts = [
        [{ invoiceId, description: null }, 'description'],
        [{ invoiceId, amount: null }, 'amount'],
        [{ invoiceId: null }, 'invoiceId']
      ];
      for (let attempt of attempts) {
        const [ nulls, columnName ] = attempt;
        const values = feeValues(nulls);
        const succeeded = await createModel(Fee, values);
        if (succeeded) expect.fail(`Created an Fee with a null ${columnName}`);
      }
    });

    it ('will fail to create with a non-existent invoice id', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const values = feeValues({ invoiceId: -1 });
      const succeeded = await createModel(Fee, values);
      if (succeeded) return expect.fail(`Created a Fee with invoiceId: -1`);
    });

    it('will fail to create with a too-long description', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const values = feeValues({ invoiceId, description: str(101) });
      const succeeded = await createModel(Fee, values);
      if (succeeded) return expect.fail(`Created a Fee with a ${j(values)}`);
    });

    it('will fail to create with too many digits or decimal places', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const values = feeValues({ amount: 10000000 });
      const succeeded = await createModel(Fee, values);
      if (succeeded) expect.fail(`Created an Fee with an amount 100000000`);
    });

    it ('queries Fee data', async () => {
      const { models, error } = loadModel('Fee');
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee } = models;

      const records = await Fee
        .findAll({ order: ['invoiceId'], where: { id: [ 1, 2, 3 ] } })
        .map(x => ({
          description: x.description,
          amount: x.amount,
          invoiceId: x.invoiceId,
          createdAt: formatDate(x.createdAt),
          updatedAt: formatDate(x.updatedAt),
        }));

      expect(records).to.eql([
        { description: 'Service', amount: '21.040', invoiceId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
        { description: 'Service', amount: '96.400', invoiceId: 3, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { description: 'Service', amount: '90.400', invoiceId: 4, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      ]);
    });

    it ('can eagerly fetch associated Invoice data', async () => {
      const { models, error } = loadModel([ 'Fee', 'Invoice' ]);
      if (stopTest(errorMessage || feeError || error)) return;

      const { Fee, Invoice } = models;

      const records = await Fee
        .findAll({ order: ['invoiceId'], where: { id: [ 1, 2, 3 ] }, include: Invoice })
        .map(x => ({
          invoiceNumber: x.Invoice.invoiceNumber,
        }));

      expect(records[0]).to.eql({ invoiceNumber: 'E0M 3P9' });
      expect(records[1]).to.eql({ invoiceNumber: 'W6Z 1B9' });
      expect(records[2]).to.eql({ invoiceNumber: 'R0T 8A7' });
    });
  });

  context('Expenses', () => {
    let invoiceId = -1;
    let expenseError;
    before(async () => {
      if (errorMessage) return;

      const { models, error } = loadModel(['Customer', 'Invoice']);

      if (error) {
        expenseError = `For Expense tests, ${error}`;
        return;
      }

      const { Customer, Invoice } = models;
      let customerId = -1;

      let values = customerValues();
      const customer = await createModel(Customer, values);
      if (customer) {
        customerId = customer.id;
      }
      if (!expenseError && customerId === -1) {
        expenseError = `Could not create a Customer for the Expense tests with ${j(values)}`;
      }

      values = invoiceValues({ customerId });
      const invoice = await createModel(Invoice, values);
      if (invoice) {
        invoiceId = invoice.id;
      }
      if (!expenseError && invoiceId === -1) {
        expenseError = `Could not create an Invoice for the Expense tests with ${j(values)}`;
      }
    });

    it ('exists and creates a good instance', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const values = expenseValues({ invoiceId });
      const succeeded = await createModel(Expense, values);
      if (!succeeded) return expect.fail(`Could not create an Expense with ${j(values)}`);
    });

    it ('will fail to create with null values', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const attempts = [
        [{ invoiceId, description: null }, 'description'],
        [{ invoiceId, numberOfUnits: null }, 'numberOfUnits'],
        [{ invoiceId, rate: null }, 'rate'],
        [{ invoiceId: null }, 'invoiceId']
      ];
      for (let attempt of attempts) {
        const [ nulls, columnName ] = attempt;
        const values = expenseValues(nulls);
        const succeeded = await createModel(Expense, values);
        if (succeeded) expect.fail(`Created an Expense with a null ${columnName}`);
      }
    });

    it ('will fail to create with a non-existent invoice id', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const values = expenseValues({ invoiceId: -1 });
      const succeeded = await createModel(Expense, values);
      if (succeeded) return expect.fail(`Created an Expense with invoiceId: -1`);
    });

    it('will fail to create with a too-long description', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const values = expenseValues({ invoiceId, description: str(101) });
      const succeeded = await createModel(Expense, values);
      if (succeeded) return expect.fail(`Created an Expense with ${j(values)}`);
    });

    it('will fail to create with too many digits or decimal places', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const attempts = [
        [{ invoiceId, rate: 10000000 }, 'rate'],
        [{ invoiceId, numberOfUnits: 10000000 }, 'numberOfUnits']
      ];
      for (let attempt of attempts) {
        const [ nulls, columnName ] = attempt;
        const values = expenseValues(nulls);
        const succeeded = await createModel(Expense, values);
        if (succeeded) expect.fail(`Created an Expense with a ${columnName} ${nulls[columnName]}`);
      }
    });

    it ('queries Expense data', async () => {
      const { models, error } = loadModel('Expense');
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense } = models;

      const records = await Expense
        .findAll({ order: ['invoiceId', 'rate'], where: { id: [ 1, 2, 3, 4, 5, 6 ] } })
        .map(x => ({
          description: x.description,
          numberOfUnits: x.numberOfUnits,
          rate: x.rate,
          invoiceId: x.invoiceId,
          createdAt: formatDate(x.createdAt),
          updatedAt: formatDate(x.updatedAt),
        }));

      expect(records).to.eql([
        { invoiceId: 1, rate: '50.000', description: 'Normal Usage', numberOfUnits: '81.750', createdAt: '2019-04-09', updatedAt: '2019-04-09' },
        { invoiceId: 2, rate: '50.000', description: 'Normal Usage', numberOfUnits: '83.500', createdAt: '2019-04-16', updatedAt: '2019-04-16' },
        { invoiceId: 2, rate: '75.000', description: 'Over X Usage', numberOfUnits: '17.250', createdAt: '2019-04-16', updatedAt: '2019-04-16' },
        { invoiceId: 3, rate: '50.000', description: 'Normal Usage', numberOfUnits: '33.000', createdAt: '2019-04-12', updatedAt: '2019-04-12' },
        { invoiceId: 4, rate: '50.000', description: 'Normal Usage', numberOfUnits: '70.000', createdAt: '2019-04-29', updatedAt: '2019-04-29' },
        { invoiceId: 4, rate: '75.000', description: 'Over X Usage', numberOfUnits: '15.000', createdAt: '2019-04-29', updatedAt: '2019-04-29' },
      ]);
    });

    it ('can eagerly fetch associated Invoice data', async () => {
      const { models, error } = loadModel([ 'Expense', 'Invoice' ]);
      if (stopTest(errorMessage || expenseError || error)) return;

      const { Expense, Invoice } = models;

      const records = await Expense
        .findAll({ order: ['invoiceId'], where: { id: [ 1, 2, 3, 4, 5, 6 ] }, include: Invoice })
        .map(x => ({
          invoiceNumber: x.Invoice.invoiceNumber,
        }));

      expect(records[0]).to.eql({ invoiceNumber: 'E0M 3P9' });
      expect(records[1]).to.eql({ invoiceNumber: 'Z1N 0Y0' });
      expect(records[2]).to.eql({ invoiceNumber: 'Z1N 0Y0' });
      expect(records[3]).to.eql({ invoiceNumber: 'W6Z 1B9' });
      expect(records[4]).to.eql({ invoiceNumber: 'R0T 8A7' });
      expect(records[5]).to.eql({ invoiceNumber: 'R0T 8A7' });
    });
  });
  context("Queries", function () {
    it('can eagerly fetch associated Invoice data', async () => {
      const { lookupCustomerAndInvoicesById } = require("../queries/customerLookup.js");
      
      const record = await lookupCustomerAndInvoicesById(1);
      expect(record.name).to.eql('Riley Reeves');
      expect(record.Invoices.length).to.eql(1);
    });

    it('can lookup a Customer by name', async () => {
      const { lookupCustomersByName } = require("../queries/customerLookup.js");

      const records = await lookupCustomersByName('Riley Reeves');
      expect(records[0].id).to.eql(1);
      expect(records[0].Invoices).to.equal(undefined); // not eagerly loaded
    });

    it('can lookup a Customer by Invoice Id', async () => {
      const { lookupCustomerByInvoiceNumber } = require("../queries/customerLookup.js");

      const record = await lookupCustomerByInvoiceNumber('E0M 3P9');
      expect(record.name).to.equal('Riley Reeves');
    });

  });
});
