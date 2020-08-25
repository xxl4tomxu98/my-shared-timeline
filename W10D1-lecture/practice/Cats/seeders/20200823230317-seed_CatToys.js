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
    return queryInterface.bulkInsert('CatToys', [
      {catId: 1, toyId: 1, createdAt: new Date(), updatedAt: new Date()},
      {catId: 1, toyId: 2, createdAt: new Date(), updatedAt: new Date()},
      {catId: 3, toyId: 4, createdAt: new Date(), updatedAt: new Date()},
      {catId: 2, toyId: 4, createdAt: new Date(), updatedAt: new Date()},
      {catId: 4, toyId: 5, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('CatToys', null, {});
  }
};
