const { Customer, Invoice  } = require('../models');

async function lookupCustomerAndInvoicesById(id) {
  // Find customer and associated invoices by customer `id`
  const customer = await Customer.findByPk(id, {
    include: Invoice
  });
  return customer;
};

async function lookupCustomersByName(name) {
  // Find customers (plural) by customer `name`
  const customers = Customer.findAll({
    name: name
  })
  return customers;
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  // Find invoice by `invoiceNumber` and return associated customer
  // Hint: each invoice has a `customerId`
  const customer = await Customer.findOne({
    include: {
      model : Invoice,
      where: {
        invoiceNumber: invoiceNumber
      },
    }
  });
  return customer;
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
