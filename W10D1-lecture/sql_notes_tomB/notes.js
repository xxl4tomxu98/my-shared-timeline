
//---------------------------------------------
//         Basic SQL Syntax Reminders
//---------------------------------------------


// A reminder on some basic psql commands...
  // =# SELECT current_user;
  // =# SELECT current_database();
  // =# \c [database_name] [desired_user]
  // =# \l
  // =# \dt
  // =# \du
  // =# DROP DATABASE [database_name]
  // =# DROP USER [desired_user]

// And a reminder on making and dropping tables / rows with raw SQL...
  // =# CREATE TABLE users(
  //    ID SERIAL PRIMARY KEY NOT NULL,
  //    NAME VARCHAR(50) NOT NULL
  // );
  // =# INSERT INTO USERS(name) VALUES ("tom");
  // =# DELETE FROM users WHERE id = 1;
  // =# DROP TABLE users;



//---------------------------------------------
//           Brainstorming a Schema
//---------------------------------------------

// A helpful tool for visualizing schema...
// https://app.quickdatabasediagrams.com/#/

// And a sample art-related schema to throw in there...

// artists
// -
// id serial
// name varchar(50)
// city varchar(50)

// collectors
// -
// id serial
// name varchar(50)
// city varchar(50)

// # tables without dependencies:
// ## artists
// ## collectors

// ## these should be migrated first



// artworks
// -
// id serial
// title varchar(50)
// year smallint
// artist_id int FK >- artists.id

// # now we start migrating dependant
// # tables in dependancy order
// # starting with any other non-joins
// # tables



// artwork_collectors
// -
// id serial
// purchase_year smallint
// artwork_id int FK >- artworks.id
// collector_id int FK >- collectors.id


// # then we can end by migrating 
// # our joins table last






//---------------------------------------------
//       Setting Up a Sequelize Project
//---------------------------------------------


// In the terminal lets start by creating a user...
  // $ psql postgres
  // =# CREATE USER artworks_app with createdb PASSWORD 'password'




// Now let's start an NPM project using npm init in the terminal...
  // $ npm init --y

// And we'll install three NPM packages including the postgres database driver...
  // $ npm install sequelize sequelize-cli pg

// Now we can initialize a sequelize project directory structure...
  // npx sequelize-cli init




// Now we have to go into our config.json and change a few things...

// First the username and password...

// {
//   "development": {
//     "username": "art_app",
//     "password": "password",
//     "database": "artworks_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize"
//   },
//   "test": { 
//     "username": "art_app",
//     "password": "password",
//     "database": "artworks_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize"
//   },
//   "production": {
//     "username": "art_app",
//     "password": "password",
//     "database": "artworks_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize"
//   }
// }



// And now we can generate this database using the sequelize cli...
  // $ npx sequelize-cli db:create



// Now we can connect to this database with postbird...
  // Username: artworks_app
  // Password: ••••••••
  // Database: artworks_development



// AND we can start populating our models folder for migrations...
  // $ npx sequelize-cli model:generate --name Artist --attributes name:string



// If we want to change anything at this point we can do so in the migration file..



// And we can always get a reminder of the possible sequelize commands...
  // $ npx sequelize-cli



// Now we can execute our pending migration...
  // npx sequelize-cli db:migrate



// And if we refresh our postbird we should see our new table!



// For an extra level of database safety 
// we can add a validation to our model file...
// Artist.init({
//   type: DataTypes.STRING,
//   validate: {
//     notEmpty: true
//   }
// }, {...



// Now we can continue making our models in order of dependency...
  // $ npx sequelize-cli model:generate --name Artwork --attributes title:string,year:integer,artistId:integer
  
  
  
// Before migrating we need to define the reference for or foreign key / keys...
  // title: {
  //   allowNull: false,
  //   type: Sequelize.STRING(150),
  //   unique: true
  // },
  // artistId: {
  //   allowNull: false,
  //   type: Sequelize.INTEGER,
  //   references: { model: "Artists" }
  // }



// Now we can migrate this...  
  // npx sequelize-cli db:migrate



// And start working on the JS models by adding validations and associations where appropriate...
  
  // Like in the Artist model (an Artist has many Artworks)...
    // static associate(models) {
    //   Artist.hasMany( models.Artwork, { foreignKey: 'artistId' })
    // }

  // And in the Artwork model (an Artwork has one Artist)...
    // static associate(models) {
    //   Artwork.hasOne( models.Artist, { foreignKey: 'artistId' } )
    // }

// Note that the primary key is the same, bridging the two.



// Now we can continue building our migrations, adding validations, migrating them and 
// adding validations and associations to the models they produce...
  // $ npx sequelize-cli model:generate --name Collector --attributes name:string,city:string
  // npx sequelize-cli db:migrate
  // $ npx sequelize-cli model:generate --name ArtworkCollector --attributes purchaseYear:string,artworkId:integer,collectorId:integer
  // npx sequelize-cli db:migrate



// Now that we have our migration structure and have tested the order,
// we can undo all of our migrations and then re-migrate them all at once...

  // $ npx sequelize-cli db:migrate:undo:all
  // $ npx sequelize-cli db:migrate

  // $ npx sequelize-cli db:migrate:undo
  // $ npx sequelize-cli db:migrate

// Observe the difference in postbird.





// Last but not least we'll need to address the 
// through associations in the model files...

// We'll build them like this and be in the same 
// callback as the other associations...  

// const columnMapping = {
//   through:    'ArtworkCollector', // joins table
//   otherKey:   'artworkId',        // key that points to the other entity, collector
//   foreignKey: 'collectorId'       // key that points to this entity, artowrk
// }
// Artwork.belongsToMany(models.Artwork, columnMapping)
  


// And there we have it! We have a migration pattern that
// will allow us to generate identicle databases and schemas in a development or 
// production environment.

// And we have JS models that will allow us to easily interact with our
// database using regular JavaScript syntax!






//------------------------------------------------------------------------------------------


//--------------------------------------------------------------------
//               Alternate Sequelize Model Syntaxes
//--------------------------------------------------------------------
  
  
// Both ways to define this model are shown below. After being defined, we can access our model with sequelize.models.User.
// Using sequelize.define:



// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true






// Here's the same thing using the Extending Model Syntax...



// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory');

// class User extends Model {}

// User.init({
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true



// Internally, sequelize.define calls Model.init, so both approaches are essentially equivalent.







//------------------------------------------------------------------------------------------


//---------------------------------------------
//          Inserting with Sequelize
//---------------------------------------------


// To start let's generate a seed file...
// $ npx sequelize-cli seed:generate --name add-artists

// Now lets add this to the seeder file that's appeared...
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     queryInterface.bulkInsert('Artists', [
//       { name: 'Jay DeFeo', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'David Park', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Joan Brown', createdAt: new Date(), updatedAt: new Date() },
//     ]);
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Artists', {
//       artist: ['Jay DeFeo', 'David Park', 'Joa Brown'] // we call this a 'where' clause
//     });
//   }
// };



// Now let's seed our database...
  // $ npx sequelize-cli db:seed:all

// And check out the content tab in postbird, its all there!

// And note that we can run that command again and we don't produce duplicates.



// Now let's insert into our table a different way...

// Start by creating a file 'using-build-save.js' in the root directory...
  // $ touch using-build-save.js

// And dropping this inside...

  // const { Artwork, sequelize } = require('./models/index');

  // async function insertNewArtwork() {
  //   const artwork = Artwork.build({
  //     title: "Bathers",
  //     year: 1977,
  //     artistId: 2
  //   })

  //   await artwork.save();

  //   sequelize.close();
  // }

  // insertNewArtwork();



// Now we can run this in our command line and see
// our new row in postbird!
  // $ node using-build-save.js



// But there's a slightly easier way using create.
// Lets make a new js file to run...
  // $ touch using-create.js

// And we'll put something like this in there...

  // const { Artwork, sequelize } = require('./models/index');

  // async function insertNewArtwork() {
  //   await Artwork.create({
  //     title: "The Rose",
  //     year: 1966,
  //     artistId: 3
  //   })

  //   sequelize.close();
  // }

  // insertNewArtwork();

// Basically just combines the build and save functions.





// Now lets get a little more complex and add an association
// in that same using-create.js file...

// const { Artwork, Collector, ArtworkCollector, sequelize } = require('./models/index');

// async function insertNewArtwork() {
//   const artwork = await Artwork.create({
//     title: "Dancing Figure",
//     year: 1971,
//     artistId: 2
//   })

//   const collector = await Collector.create({
//     name: "Robert Mondavi",
//     city: "Napa, CA"
//   })

//   await artwork.addCollector(collector);
//   // await  collector.addArtwork(artwork);

//   sequelize.close();
// }

// insertNewArtwork();



// Now we can run that using node and see it all in postbird!
  // $ node using-create.js





//------------------------------------------------------------------------------------------


//-----------------------------------------------------------
//            Updating & Deleting using Sequelize
//-----------------------------------------------------------


// Now let's tackle updating which is even easier than adding.
  // const readline = require('readline');
  // const { Artist, sequelize } = require('./models/index');

  // async function insertNewArtist() {
  //   const artist = await Artist.create({
  //     name: "Aaron Brook",
  //     city: "Sacramento, CA"
  //   })

  //   // await readline.pause();

  //   artist.city = "San Francisco, CA";
  //   await artist.save();

  //   sequelize.close();
  // }

  // insertNewArtist();



// You can also destroy rows in a similar way...
  // const readline = require('readline');
  // const { Artist, sequelize } = require('./models/index');

  // async function insertNewArtist() {
  //   const artist = await Artist.create({
  //     name: "Aaron Brook",
  //     city: "Sacramento, CA"
  //   })

  //   // await readline.pause();

  //   await artist.destroy();

  //   sequelize.close();
  // }

  // insertNewArtist();



 // But there's a more scalable way to destroy things...
  // const { Artist, sequelize } = require('./models/index');

  // async function deleteArtists() {
  //   await Artist.destroy({ // again we call this a 'where' clause
  //     where: {
  //       id: [4, 5, 6, 7, 8, 9, 10]
  //     }
  //   })

  //   sequelize.close();
  // }

  // deleteArtists();

// And there it is! Check out postbird.