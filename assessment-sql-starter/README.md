# SQL Assessment

In this assessment, you will create:

* A database user with a password
* A database owned by that user
* Some tables

Then, you will write a SQL file that will insert data into the tables.

Then, you will write a SQL file that contains a SQL statement that joins the
tables together.

There's an image in the "images" directory that shows the picture of the data
model.

There are mocha tests that determine if it can connect to the database with the
specified user name, password, and database name. Then, it checks the tables to
make sure that they have the structure specified.

Run the tests with "npm test".

## NOTE about typos

If you accidentally create a table with the wrong name. Say, you create a table
named "feeds" rather than "fees", _you_ will have to manually drop that table
yourself before running your tests, again.

You can drop a table in two ways:

* Use Postbird to access your database, right-click on the bad table, and choose
  "Drop table" from the menu.
* From your command line, connect to the database using
  `psql invoice_app_development` and write the "DROP TABLE" statement after
  confirming that you are in the "invoice_app_development" database from looking
  at the command line and seeing `invoice_app_development=#`. If you don't know
  the bad table name, type `\dt` to see the list of tables in the
  "invoice_app_development" database.

## Get started

* Clone the assessment from
  https://github.com/appacademy/assessment-sql-starter
* Run `npm install`
* Run tests with `npm test`

## Step 1

Create a database user named "invoice_app" with the password "invoice_app".
There is no file for this. Just do it for your local installation of PostgreSQL.
The tests assume that it exists.

**Note**: You should _never_ set the password of a database user to something so
easy to guess. This is merely a convenience for this assessment.

## Step 2

Create a database named "invoice_app_development" with the owner "invoice_app".
There is no file for this. Just do it for your local installation of PostgreSQL.
The tests assume that it exists.

## Step 3

Create the following tables in the database. Write the CREATE TABLE statements
in the files that match the table name. For example, in the
"create-customers-table.sql", write the CREATE TABLE statement for the
"customers" table.

The tests will drop all of the tables and run the table creation for you
automatically.

Do these in order.

The "PK, NOT NULL" specification means it should be a primary key. The "FK"
specification means it should be a foreign key. All columns with "NOT NULL"
should not allow NULL values. There is one column in the invoices table that is
allowed to be NULL. Just don't put the "NOT NULL" constraint on it.

* The "customers" table

| Column name   | Column type  | Constraints      |
|---------------|--------------|------------------|
| id            | SERIAL       | PK, NOT NULL     |
| name          | VARCHAR(50)  | UNIQUE, NOT NULL |
| contact_email | VARCHAR(200) | UNIQUE, NOT NULL |

* The "invoices" table

| Column name    | Column type | Constraints      |
|----------------|-------------|------------------|
| id             | SERIAL      | PK, NOT NULL     |
| invoice_number | VARCHAR(20) | UNIQUE, NOT NULL |
| created_at     | TIMESTAMP   | NOT NULL         |
| paid_on        | TIMESTAMP   |                  |
| customer_id    | INTEGER     | FK, NOT NULL     |

* The "fees" table

| Column name | Column type    | Constraints  |
|-------------|----------------|--------------|
| id          | SERIAL         | PK, NOT NULL |
| description | VARCHAR(100)   | NOT NULL     |
| amount      | NUMERIC(10, 3) | NOT NULL     |
| invoice_id  | INTEGER        | FK, NOT NULL |

* The "expenses" table

| Column name     | Column type    | Constraints  |
|-----------------|----------------|--------------|
| id              | SERIAL         | PK, NOT NULL |
| description     | VARCHAR(100)   | NOT NULL     |
| number_of_units | NUMERIC(10, 3) | NOT NULL     |
| rate            | NUMERIC(10, 3) | NOT NULL     |
| invoice_id      | INTEGER        | FK, NOT NULL |

## Step 4

Create INSERT statements for the four tables in each of the four files provided
for you. Here is the data that you should include. Don't insert more data than
what is here. Otherwise, the tests in the next section will fail.

* The "customers" table

| name            | contact_email                                   |
|-----------------|-------------------------------------------------|
| 'Riley Reeves'  | 'primis.in.faucibus@pellentesqueegetdictum.edu' |
| 'Jarrod Newman' | 'turpis.Aliquam.adipiscing@auctor.ca'           |


* The "invoices" table

| invoice_number | created_at   | paid_on      | customer_id |
|----------------|--------------|--------------|-------------|
| 'E0M 3P9'      | '2019-04-09' | '2019-04-30' | 1           |
| 'Z1N 0Y0'      | '2019-04-16' | NULL         | 2           |
| 'W6Z 1B9'      | '2019-04-12' | '2019-05-15' | 2           |
| 'R0T 8A7'      | '2019-04-29' | NULL         | 2           |

* The "fees" table

| description | amount | invoice_id |
|-------------|--------|------------|
| 'Service'   | 96.40  | 3          |
| 'Service'   | 90.40  | 4          |
| 'Service'   | 21.04  | 1          |

* The "expenses" table

| description    | number_of_units | rate  | invoice_id |
|----------------|-----------------|-------|------------|
| 'Normal Usage' | 70.00           | 50.00 | 4          |
| 'Over X Usage' | 15.00           | 75.00 | 4          |
| 'Normal Usage' | 81.75           | 50.00 | 1          |
| 'Normal Usage' | 83.50           | 50.00 | 2          |
| 'Normal Usage' | 33.00           | 50.00 | 3          |
| 'Over X Usage' | 17.25           | 75.00 | 2          |

## Step 5

Write a SQL statement in joined-fees-query.sql that returns the following data
by JOINing the tables:

* customers.name
* invoices.invoice_number
* fees.description
* fees.amount

Order the records on the customers name column.

The tests will expect them to be ordered by customer name. For other column
values, it will just check to make sure the result set contains the invoice and
fee data. It will take into account differences in appearance between your data
and the specific order of rows below. But, they *must* be sorted by customer
name.

## Step 6

Write a SQL statement in joined-expenses-query.sql that returns the following data
by JOINing the tables:

* customers.name
* invoices.invoice_number
* expenses.description
* expenses.number_of_units
* expenses.rate

Order the records on the customers name column.

The tests will expect them to be ordered by customer name. For other column
values, it will just check to make sure the result set contains the invoice and
fee data. It will take into account differences in appearance between your data
and the specific order of rows below. But, they *must* be sorted by customer
name.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it
