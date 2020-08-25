'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    description: DataTypes.STRING,
    numberOfUnits: DataTypes.NUMERIC,
    rate: DataTypes.NUMERIC,
    invoiceId: DataTypes.INTEGER
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
    Expense.belongsTo(models.Invoice, {foreignKey: 'invoiceId'});
  };
  return Expense;
};
