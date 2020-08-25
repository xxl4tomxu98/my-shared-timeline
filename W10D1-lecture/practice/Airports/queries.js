const { Airport, Flight, Airplane } = require('./models');
const Sequelize = require('sequelize');

async function finadAllFlights() {
  // Find all Flights departing before July 1, 2020
  const flights = await Flight.findAll( {
    as: 'departureAirport',
    where: {
      date: {
        [Sequelize.Op.lt]: '2020-06-30'
      }
    }
  })
  //console.log(JSON.stringify(flights, null, 2));
  for(let flight of flights){
    console.log(flight.toJSON());
  }
};


//finadAllFlights();


async function finadAllAirports() {
  // Find all airports, that have flights departing after July 1, 2020
  const airports = await Airport.findAll( {
    include: {
      model: Flight,
      as: 'departureAirport',
      where: {
        date: {
          [Sequelize.Op.gt]: '2020-06-30'
        }
      }
    }
  })
  //console.log(JSON.stringify(airports, null, 2));
  for(let airport of airports){
    console.log(airport.toJSON());
  }
};

//finadAllAirports();



async function finadModelAllAirplanes() {
  // Find the model of all planes that will be departing from the airport with airportCode 'YYC'
  const airplanes = await Airplane.findAll( {
    include: {
      model: Flight,
      include: {
        model: Airport,
        as: 'departureAirport',
        where: {
          airportCode: 'YYC'
        }
      }
    }
  });

  for(let plane of airplanes){
    airplaneModel = plane.model;
    console.log(airplaneModel);
  }
};


finadModelAllAirplanes();
