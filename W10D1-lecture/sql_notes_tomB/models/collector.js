'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const columnMapping = {
        through: 'ArtworkCollector', // joins table
        otherKey: 'artworkId', // key that points to the other entity, collector
        foreignKey: 'collectorId' // key that points to this entity, artowrk
      }
      Collector.belongsToMany(models.Artwork, columnMapping)
    }
  };
  Collector.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collector',
  });
  return Collector;
};