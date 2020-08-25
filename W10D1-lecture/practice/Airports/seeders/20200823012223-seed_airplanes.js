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
    return queryInterface.bulkInsert('Airplanes', [
      {id:1, model: '747', capacity: 500, createdAt: new Date(), updatedAt: new Date()},
      {id:2, model: '737', capacity: 100, createdAt: new Date(), updatedAt: new Date()},
      {id:3, model: 'Cessna 172', capacity: 4, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Airplanes', null, {});
  }
};
