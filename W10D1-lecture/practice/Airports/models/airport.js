'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    airportCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    airportName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Airport.associate = function(models) {
    // associations can be defined here
    Airport.hasMany(models.Flight, {foreignKey: 'departureAirportId'});
    Airport.hasMany(models.Flight, {foreignKey: 'arrivalAirportId'});
  };
  return Airport;
};
