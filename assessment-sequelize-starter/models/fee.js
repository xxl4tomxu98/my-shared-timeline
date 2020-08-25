'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fee = sequelize.define('Fee', {
    description: DataTypes.STRING,
    amount: DataTypes.NUMERIC,
    invoiceId: DataTypes.INTEGER
  }, {});
  Fee.associate = function(models) {
    // associations can be defined here
    Fee.belongsTo(models.Invoice, {foreignKey: 'invoiceId'});
  };
  return Fee;
};
