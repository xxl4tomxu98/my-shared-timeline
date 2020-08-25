'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    date:{
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    time: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    arrivalAirportId:{
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    departureGate: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Flight.associate = function(models) {
    // associations can be defined here
    Flight.belongsTo(models.Airplane, {foreignKey: 'airplaneId'});
    Flight.belongsTo(models.Airport, {as: 'departureAirport', foreignKey: 'departureAirportId'});
    Flight.belongsTo(models.Airport, {as: 'arrivalAirport', foreignKey: 'arrivalAirportId'});
  };
  return Flight;
};
