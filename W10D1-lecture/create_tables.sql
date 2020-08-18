--  psql alissa_app_db < data/create_tables.sql

DROP TABLE dogs;
DROP TABLE users;


-- CREATE USERS TABLE

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL
);


-- CREATE DOGS TABLE

CREATE TABLE dogs (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	name VARCHAR (50) NOT NULL,
	age NUMERIC(3,1),

	FOREIGN KEY (user_id) REFERENCES users(id)
);


-- add entries to users table


INSERT INTO
  users(first_name, last_name)
VALUES
  ('Alissa', 'Crane'),
  ('Angela', 'Topchev'),
	('Julie', 'Nisbet'),
	('Tom', 'Betthauser'),
	('Corina', 'Schambacher');


-- add entries to dogs table


INSERT INTO 
	dogs(user_id, name, age)
VALUES
	(1, 'Bodhi', 5);