'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceNumber: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      issuedOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paidOn: {
        type: Sequelize.DATE
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Customers"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoices');
  }
};