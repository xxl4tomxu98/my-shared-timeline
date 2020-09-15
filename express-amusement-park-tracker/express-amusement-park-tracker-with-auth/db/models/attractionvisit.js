'use strict';
module.exports = (sequelize, DataTypes) => {
  const AttractionVisit = sequelize.define('AttractionVisit', {
    visitedOn: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {});
  AttractionVisit.associate = function(models) {
    AttractionVisit.belongsTo(models.Attraction, {
      as: 'attraction',
      foreignKey: 'attractionId'
    });
    AttractionVisit.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  };

  return AttractionVisit;
};
