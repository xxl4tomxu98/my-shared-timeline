# DATABASE LINGO


Relational Database Management Systems (RDBMS)
- software that manages database for us
- what your programs connect to in order to store, modify, retrieve data
- can manage 100s of databases at once
- ex: PostgreSQL


Relational Database
- collection of structured data that RDBMS manages
- often refer to RDBMS as "database"
- data stored in tables using rows and columns
- each row is a record in the database
- columns are specific types of data
- values in tables can be related to values in other tables
	* via unique identifier

PostgreSQL
- opensource, relational db management system
- `psql`: terminal based front-end to PostgreSQL
   * allows you to type queries and see results
- install onto computer, runs as "service" (always running in background)
   * waits for you to connect to it via command line, tool, or app


Structured Query Language (SQL)
- primary way you'll interact with RDBMS
- declarative programming language
  * you tell db what computation you want and it does it
- works with set of records


How to use SQL
1. connect to an RDBMS specifying:
   * credentials, username/password
   * name of db you want to usee
2. Issue one or more SQL statements to interact with:
   * structure of db
   * data in db




# USER MANAGEMENT

Overview
- "User" in PostgreSQL is a database entitity
  * represents person or system that will connect to RDBMS and access data
- good practice to create diff db user for each app
  * prevents apps from reading/changing data in other db 


Superuser
- full control of database
- created during installation of postgres
- username will be username for your computer
- password will be your computer password


`psql postgres`
- connects you to "postgres" database
- can create users/superusers in this database





