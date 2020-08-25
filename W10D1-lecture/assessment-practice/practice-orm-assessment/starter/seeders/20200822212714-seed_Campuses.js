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
    return queryInterface.bulkInsert('Campuses', [
      { name: 'Valdivia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bangor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chatillon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Filacciano', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Campuses', null, {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};
