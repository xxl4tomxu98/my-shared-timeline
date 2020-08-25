'use strict';
module.exports = (sequelize, DataTypes) => {
  const Toy = sequelize.define('Toy', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Toy.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'CatToy', // This is the model name referencing the join table.
      otherKey: 'catId',
      foreignKey: 'toyId'
    }
    Toy.belongsToMany(models.Cat, columnMapping);
  };
  return Toy;
};
