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
    return queryInterface.bulkInsert('Cats', [
      {name:'Jet', color:'Black', breed:'Mixed Breed', createdAt: new Date(), updatedAt: new Date()},
      {name:'Freyja', color:'Orange', breed:'Unknown', createdAt: new Date(), updatedAt: new Date()},
      {name:'Rocky', color:'Black', breed:'Bombay', createdAt: new Date(), updatedAt: new Date()},
      {name:'Stewart', color:'White', breed:'Birman', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Cats', null, {});
  }
};
