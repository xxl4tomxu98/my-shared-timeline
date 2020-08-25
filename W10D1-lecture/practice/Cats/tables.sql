-- CREATE TABLE Cats (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(30) NOT NULL,
--   color VARCHAR(30) NOT NULL,
--   breed VARCHAR(30) NOT NULL
-- );


-- CREATE TABLE Toys (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(30) NOT NULL,
--   color VARCHAR(30) NOT NULL,
--   price NUMERIC(4,2) NOT NULL
-- );

-- CREATE TABLE CatToys (
--   id SERIAL PRIMARY KEY NOT NULL,
--   catId INTEGER NOT NULL,
--   toyId INTEGER NOT NULL,
--   FOREIGN KEY (catId) REFERENCES Cats(id),
--   FOREIGN KEY (toyId) REFERENCES Toys(id)
-- );


-- INSERT INTO Cats (name, color, breed)
-- VALUES
-- ('Jet', 'Black', 'Mixed Breed'),
-- ('Freyja', 'Orange', 'Unknown'),
-- ('Rocky', 'Black', 'Bombay'),
-- ('Stewart', 'White', 'Birman');

-- SELECT * FROM Cats;


-- INSERT INTO Toys (name, color, price)
-- VALUES
-- ('String', 'yellow', 1.00),
-- ('Tiger', 'Orchid', 2.00),
-- ('Fish', 'Orange', 3.00),
-- ('Ball', 'Peach', 4.00),
-- ('Box', 'Brown', 3.00);

-- SELECT * FROM Toys;


-- INSERT INTO CatToys (catId, toyId)
-- VALUES
-- (1, 1),
-- (1, 2),
-- (3, 4),
-- (2, 4),
-- (4, 5);

-- SELECT * FROM CatToys;
SELECT catId FROM CatToys
INNER JOIN Toys ON (CatToys.toyId = Toys.id)
WHERE Toys.name = 'Box';

SELECT toyId FROM CatToys
INNER JOIN Cats ON (CatToys.catId = Cats.id)
WHERE Cats.name = 'Rocky';

SELECT Toys.name, Cats.name FROM Cats INNER JOIN CatToys ON (CatToys.catId = Cats.id)
INNER JOIN Toys ON (CatToys.toyId = Toys.id);
