'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      numberOfUnits: {
        allowNull: false,
        type: Sequelize.NUMERIC(10,3)
      },
      rate: {
        allowNull: false,
        type: Sequelize.NUMERIC(10,3)
      },
      invoiceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Invoices'}
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
    return queryInterface.dropTable('Expenses');
  }
};
