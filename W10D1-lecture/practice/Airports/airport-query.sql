--1.
select * from flights where date < '2020-07-01';

--2.
select * from airports inner join flights ON (flights.departureAirportId = airports.id) where date > '2020-07-01';

--3.
select model from airplanes inner join flights on (airplanes.id = flights.airplaneId) inner join airports on(flights.departureAirportId = airports.id) where airportCode = 'YYC';
