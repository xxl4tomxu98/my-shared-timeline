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
    return queryInterface.bulkInsert('Airports', [
      {id:1, airportCode: 'YYC', airportName: 'Calgary', createdAt: new Date(), updatedAt: new Date()},
      {id:2, airportCode: 'YYZ', airportName: 'Toronto', createdAt: new Date(), updatedAt: new Date()},
      {id:3, airportCode: 'YVR', airportName: 'Vancouver', createdAt: new Date(), updatedAt: new Date()},
      {id:4, airportCode: 'YUL', airportName: 'Montreal', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Airports', null, {});
  }
};
