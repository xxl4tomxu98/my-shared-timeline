# DEMO

login to psql as superuser
- superusers have full control of db
`psql`

show all users
`\du ;`

show current database location
`\c`

show all databases
`\list`

switch to different DB
`\c <database>`







## Creating Users


check current user
`select current_user`


create normal user
`create user <username> with password 'password' ;`
`create user normal_alissa with password 'password' ;`


normal users
- cannot create database
- can select / insert / manip data that already exists
- can tell if youre logged in as normal or super based on `>` or `#`


login to postgres as normal user
`psql -U <username> postgres ;`
`psql -U normal_alissa postgres ;`



creating superuser
`create user <username> with superuser password 'password' ;`
`create user super_alissa with superuser password 'password' ;`
- success: 'CREATE ROLE'



login to postgres as superuser
`psql -U <username> <database> ;`
`psql -U super_alissa postgres;`




creating user with CREATEDB priviledges
`create user <username> with createdb password 'password' ;`
`create user test_app with createdb password 'password' ;`


Connecting to database
- `psql -W -U <username> <database>;`
   * -W: prompt for password
   * -U: connect as specified user
- `ada=>`: connected as normal user
- `ada=#`: connected as superuser











## Creating Databases


Creating databases
- superuser can create db, or users with createdb priviledges
- if you dont specify owner, it will default to user currently logged in
- `create database <dbname> with owner <username>;`
- `create database alissa_db with owner alissa;`

Connect to database as user
- `psql -W -U <username> <database-name>;`








## Droping Users and Databases

Deleting users
- `drop user <username>`
- cant drop users if db objects rely on existence of user
  * cant drop user if they own a database
  * must revoke any access priviledges & delete any owned db
- example of relational data
  * cant remove data unless you remove related data too


drop users
`drop user <username> ;`


cant destroy data that other data relies on
- cant delete user if user owns database
- first delete the objects they own first
- `drop user bob;` => error


delete database
`drop database <database-name> `;





## Creating Tables

Defining Tables
- need to know what data it will store
- what type each piece of data is


String Data types
1. VARCHAR(50)
   - can contain text of varying length up to specified max
2. TEXT
   - can contain unlimited number of characters
   - performance issue: slower than other string types


Numeric Data Types
1. INTEGER
   - can hold almost all numbers postive and negative (up to 2.1 billion)
2. BIGINT
   - holds bigger numbers than integer
3. NUMERIC(4, 2)
   - fixed point number
   - first arg: total number of digits
   - seconds arg: number of digits after decimal
   - ex: 23.22 not 123.22


Naming a table
- no spaces or dashes
- only lowercase letters, numbers, underscores
  * good example: `student_grades`
  * bad example: `Student-Grades`


primary key
- always should have an id column in db
- unique index for database entry
- will be of type SERIAL
- significant value in database
`primary key (id)`


foreign key
- value "person_id" must reference id in people id column
`person_id integer,`
`foreign key (person_id) references people (id)`


create table
```sql

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL
);


CREATE TABLE dogs (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	name VARCHAR (50) NOT NULL,
	age NUMERIC(3,1),

	FOREIGN KEY (user_id) REFERENCES users(id)
);

```

There is another way to do foreign key:
```sql

CREATE TABLE cities (
  city     varchar(80) primary key,
  location point
);
CREATE TABLE weather (
  city      varchar(80) references cities(city),
  temp_lo   int,
  temp_hi   int,
  prcp      real,
  date      date
);

```
