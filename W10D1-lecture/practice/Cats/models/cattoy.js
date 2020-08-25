'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatToy = sequelize.define('CatToy', {
    catId: DataTypes.INTEGER,
    toyId: DataTypes.INTEGER
  }, {});
  CatToy.associate = function(models) {
    // associations can be defined here
    CatToy.belongsTo(models.Cat, {foreignKey: 'catId'});
    CatToy.belongsTo(models.Toy, {foreignKey: 'toyId'});
  };
  return CatToy;
};
