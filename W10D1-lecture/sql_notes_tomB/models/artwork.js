'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artwork.belongsTo( models.Artist, { foreignKey: 'artistId' } );

      const columnMapping = {
        through: 'ArtworkCollector', // joins table
        otherKey: 'collectorId', // key that points to the other entity, collector
        foreignKey: 'artworkId' // key that points to this entity, artowrk
      }
      Artwork.belongsToMany(models.Collector, columnMapping)
    }
  };
  Artwork.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER
    },
    artistId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Artwork',
  });
  return Artwork;
};