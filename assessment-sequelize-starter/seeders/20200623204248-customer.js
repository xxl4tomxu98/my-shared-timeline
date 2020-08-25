'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [{ name: 'Riley Reeves', contactEmail: 'primis.in.faucibus@pellentesqueegetdictum.edu', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jarrod Newman', contactEmail: 'turpis.Aliquam.adipiscing@auctor.ca', createdAt: new Date(), updatedAt: new Date() },])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', {
      name: ['Riley Reeves', 'Jarrod Newman']
    });
  }
};
