'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ArtworkCollectors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleYear: {
        type: Sequelize.INTEGER
      },
      artworkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Artworks" }
      },
      collectorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Collectors" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ArtworkCollectors');
  }
};