'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },

    petTypeId: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {});
  Pet.associate = function(models) {
    //many side
    // associations can be defined here
    Pet.belongsTo(models.PetType, {foreignKey: 'petTypeId'});

    const columnMapping = {
        through: 'PetOwner', //joinning table
        otherKey: 'ownerId', //key points to the other entity, Owner
        foreignKey: 'petId' //key that points to this entity, Pet
    };
    Pet.belongsToMany(models.Owner, columnMapping);
  };
  return Pet;
};
