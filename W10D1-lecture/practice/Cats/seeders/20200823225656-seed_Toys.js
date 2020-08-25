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

    return queryInterface.bulkInsert('Toys', [
      {name:'String', color:'yellow', price: 1.00, createdAt: new Date(), updatedAt: new Date()},
      {name:'Tiger', color:'Orchid', price: 2.00, createdAt: new Date(), updatedAt: new Date()},
      {name:'Fish', color:'Orange', price: 3.00, createdAt: new Date(), updatedAt: new Date()},
      {name:'Ball', color:'Peach', price: 4.00, createdAt: new Date(), updatedAt: new Date()},
      {name:'Box', color:'Brown', price: 3.00, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Toys', null, {});
  }
};
