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
    return queryInterface.bulkInsert('Flights', [
      {id:1, date: '2020-03-01', time: '12:40', departureAirportId: 1, arrivalAirportId: 2, status: 'ON-TIME', departureGate: 'D34', airplaneId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id:2, date: '2020-04-01', time: '1:30', departureAirportId: 4, arrivalAirportId: 2, status: 'ON-TIME', departureGate: 'D34', airplaneId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id:3, date: '2020-05-01', time: '2:25', departureAirportId: 4, arrivalAirportId: 3, status: 'ON-TIME', departureGate: 'D34', airplaneId: 1, createdAt: new Date(), updatedAt: new Date()},
      {id:4, date: '2020-06-01', time: '3:30', departureAirportId: 3, arrivalAirportId: 2, status: 'ON-TIME', departureGate: 'D34', airplaneId: 2, createdAt: new Date(), updatedAt: new Date()},
      {id:5, date: '2020-07-01', time: '12:40', departureAirportId: 2, arrivalAirportId: 1, status: 'ON-TIME', departureGate: 'D34', airplaneId: 3, createdAt: new Date(), updatedAt: new Date()},
      {id:6, date: '2020-08-01', time: '2:14', departureAirportId: 4, arrivalAirportId: 3, status: 'ON-TIME', departureGate: 'D34', airplaneId: 1, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Flights', null, {});
  }
};
