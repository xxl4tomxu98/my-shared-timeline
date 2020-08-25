const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`
  return await Person.findByPk(personId, {
    include: [Course]
  })
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`
  return await Person.findAll({
    where: {
      lastName: lastName
    }
  })
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses
  let student = await Person.findOne({
    where: {
      email: email
    },
    include: Course
  });
  return student.Courses;
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
