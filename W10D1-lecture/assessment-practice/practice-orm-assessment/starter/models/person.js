'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Enrollment', // This is the model name referencing the join table.
      otherKey: 'courseId',
      foreignKey: 'personId'
    }
    Person.belongsToMany(models.Course, columnMapping);
  };
  return Person;
};
