'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model : 'Airports'}
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model : 'Airports'}
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      departureGate: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model : 'Airplanes'}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flights');
  }
};
