'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Enrollments', [
      { personId: 3, courseId: 7, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 6, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
      { personId: 3, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, courseId: 5, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Enrollments', null, {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};
