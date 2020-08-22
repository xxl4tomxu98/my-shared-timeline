'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: {
      type: DataTypes.NUMERIC,
      validate: {
        notEmpty: true,
      },
    },
    measurementUnitId:{
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    foodStuff: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    }
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });

    Ingredient.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measurementUnitId'
    });
  };
  return Ingredient;
};
