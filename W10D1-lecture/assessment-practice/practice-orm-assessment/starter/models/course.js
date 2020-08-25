'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Enrollment', // This is the model name referencing the join table.
      otherKey: 'personId',
      foreignKey: 'courseId'
    }
    Course.belongsToMany(models.Person, columnMapping);
    Course.belongsTo(models.Campus, {foreignKey: 'campusId'});
    Course.belongsTo(models.Department, {foreignKey: 'departmentId'});
  };
  return Course;
};
