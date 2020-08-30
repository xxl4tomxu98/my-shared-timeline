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
    return queryInterface.bulkInsert('HairColors', [
      {color: 'Auburn', createdAt: new Date(), updatedAt: new Date()},
      {color: 'Black', createdAt: new Date(), updatedAt: new Date()},
      {color: 'Blonde', createdAt: new Date(), updatedAt: new Date()},
      {color: 'Brown', createdAt: new Date(), updatedAt: new Date()},
      {color: 'Other', createdAt: new Date(), updatedAt: new Date()},
      {color: 'Red', createdAt: new Date(), updatedAt: new Date()},
      {color: 'White', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('HairColors', null, {});
  }
};
