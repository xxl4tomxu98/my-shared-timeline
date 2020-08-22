'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Artists', [
      { name: 'Jay DeFeo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'David Park', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Joan Brown', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', {
      artist: ['Jay DeFeo', 'David Park', 'Joa Brown'] // we call this a 'where' clause
    });
  }
};
