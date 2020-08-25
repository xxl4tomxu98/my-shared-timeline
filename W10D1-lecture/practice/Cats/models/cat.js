'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    breed: DataTypes.STRING
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'CatToy', // This is the model name referencing the join table.
      otherKey: 'toyId',
      foreignKey: 'catId'
    }
    Cat.belongsToMany(models.Toy, columnMapping);
  };
  return Cat;
};
