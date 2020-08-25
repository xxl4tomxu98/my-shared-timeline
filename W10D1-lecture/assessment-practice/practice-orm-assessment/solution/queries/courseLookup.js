const { Person, Course, Department  } = require('../models');
const {Op} = require("sequelize");

async function lookupCourseAndPeople(courseId) {
};

async function lookupCourseByDepartmentName(departmentName) {
};

async function lookupCoursesByLevel(level) {
};

module.exports = {
  lookupCourseAndPeople,
  lookupCourseByDepartmentName,
  lookupCoursesByLevel,
};
