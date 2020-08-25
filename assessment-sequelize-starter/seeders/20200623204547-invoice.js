'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Invoices', [
      { invoiceNumber: 'E0M 3P9', issuedOn: '2019-04-09', paidOn: '2019-04-30', customerId: 1, createdAt: '2019-04-09', updatedAt: '2019-04-09' },
      { invoiceNumber: 'Z1N 0Y0', issuedOn: '2019-04-16', paidOn: null, customerId: 2, createdAt: '2019-04-16', updatedAt: '2019-04-16' },
      { invoiceNumber: 'W6Z 1B9', issuedOn: '2019-04-12', paidOn: '2019-05-15', customerId: 2, createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { invoiceNumber: 'R0T 8A7', issuedOn: '2019-04-29', paidOn: null, customerId: 2, createdAt: '2019-04-29', updatedAt: '2019-04-29' },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Invoices', {
      invoiceNumber: ['E0M 3P9', 'Z1N 0Y0', 'W6Z 1B9', 'R0T 8A7']
    });
  }
};
