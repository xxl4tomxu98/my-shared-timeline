'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define('Airplane', {
    model: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Airplane.associate = function(models) {
    // associations can be defined here
    Airplane.hasMany(models.Flight, {foreignKey: 'airplaneId'});

  };
  return Airplane;
};
