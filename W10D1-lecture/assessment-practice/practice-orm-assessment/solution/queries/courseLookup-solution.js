const { Person, Course, Department  } = require('../models');
const {Op} = require("sequelize");

async function lookupCourseAndPeople(courseId) {
    const course = await Course.findByPk(courseId, {
        include: Person
    })
    return course;
};

async function lookupCourseByDepartmentName(departmentName) {
  const dept = await Department.findOne({
    where:{
      name: departmentName
    },
    include: Course
  })
  return dept.Courses;
};

async function lookupCoursesByLevel(level) {
  const courses = await Course.findAll({
    where: {
      level: {
        [Op.gte]: level
      }
    },
  });
  return courses;
};

module.exports = {
  lookupCourseAndPeople,
  lookupCourseByDepartmentName,
  lookupCoursesByLevel,
};
