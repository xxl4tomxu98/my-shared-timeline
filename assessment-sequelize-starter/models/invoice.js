'use strict';

//const { ForeignKeyConstraintError } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceNumber: DataTypes.STRING,
    issuedOn: DataTypes.DATE,
    paidOn: DataTypes.DATE,
    customerId: DataTypes.INTEGER
  }, {});
  Invoice.associate = function (models) {
    // Associations can be defined here
    Invoice.belongsTo(models.Customer, {foreignKey: 'customerId'});
    Invoice.hasMany(models.Fee, {foreignKey: 'invoiceId'});
    Invoice.hasMany(models.Expense, {foreignKey: 'invoiceId'});
  };
  return Invoice;
};
