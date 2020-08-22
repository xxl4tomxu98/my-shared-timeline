'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtworkCollector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ArtworkCollector.belongsToMany(models.Artwork, { foreignKey: 'artistId' });
      // ArtworkCollector.belongsToMany(models.Collector, { foreignKey: 'collectorId' });
    }
  };
  ArtworkCollector.init({
    saleYear: DataTypes.INTEGER,
    artworkId: DataTypes.INTEGER,
    collectorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArtworkCollector',
  });
  return ArtworkCollector;
};