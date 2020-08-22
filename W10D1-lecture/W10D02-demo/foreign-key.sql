ALTER TABLE friends ADD COLUMN puppy_id INT;
ALTER TABLE friends ADD FOREIGN KEY (puppy_id) REFERENCES puppies(id);
UPDATE friends
SET puppy_id = 4
WHERE ID = 1;


UPDATE friends
SET puppy_id = 5
WHERE ID = 2;


UPDATE friends
SET puppy_id = 6
WHERE ID = 3;

UPDATE friends
SET puppy_id = 7
WHERE ID = 4;

UPDATE friends
SET puppy_id = 8
WHERE ID = 5;


SELECT id
FROM puppies
WHERE
  age_yrs < 0.6;


SELECT *
FROM friends
WHERE
  puppy_id IN (
    SELECT id
    FROM puppies
    WHERE
      age_yrs < 0.6
  );

SELECT *
FROM friends
INNER JOIN puppies ON (puppies.id = friends.puppy_id)
WHERE
  puppies.age_yrs < 0.6;
