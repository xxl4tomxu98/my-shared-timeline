INSERT INTO airports VALUES(DEFAULT, 'YYC', 'Calgary');
INSERT INTO airports VALUES(DEFAULT, 'YYZ', 'Toronto');
INSERT INTO airports VALUES(DEFAULT, 'YVR', 'Vancouver');
INSERT INTO airports VALUES(DEFAULT, 'YUL', 'Montreal');
SELECT * FROM airports;

INSERT INTO airplanes VALUES(DEFAULT, '747', 500);
INSERT INTO airplanes VALUES(DEFAULT, '737', 100);
INSERT INTO airplanes VALUES(DEFAULT, 'Cessna 172', 4);
SELECT * FROM airplanes;

INSERT INTO flights VALUES(DEFAULT, Date('2020-03-01'), '12:40', 1, 2, 'ON-TIME', 'D34', 1);
INSERT INTO flights VALUES(DEFAULT, Date('2020-04-01'), '1:30', 4, 2, 'ON-TIME', 'D34', 1);
INSERT INTO flights VALUES(DEFAULT, Date('2020-05-01'), '2:25', 4, 3, 'ON-TIME', 'D34', 1);
INSERT INTO flights VALUES(DEFAULT, Date('2020-06-01'), '3:30', 3, 2, 'ON-TIME', 'D34', 2);
INSERT INTO flights VALUES(DEFAULT, Date('2020-07-01'), '12:40', 2, 1, 'ON-TIME', 'D34',3);
INSERT INTO flights VALUES(DEFAULT, Date('2020-08-01'), '2:14', 4, 3, 'ON-TIME', 'D34', 1);
INSERT INTO flights VALUES(DEFAULT, Date('2020-09-01'), '3:31', 5, 2, 'ON-TIME', 'D34', 2);
SELECT * FROM flights;
