
const { sequelize, Cat } = require("./models");

const { Op } = require("sequelize");

// //authenticate connectivity
// async function main() {
//   try {
//     await sequelize.authenticate();
//   } catch (e) {
//     console.log("Database connection failure.");
//     console.log(e);
//     return;
//   }

//   console.log("Database connection success!");
//   console.log("Sequelize is ready to use!");

//   // Close database connection when done with it.
//   await sequelize.close();
// }




//creating a record
// async function main() {
//   try {
//     await sequelize.authenticate();
//   } catch (e) {
//     console.log("Database connection failure.");
//     console.log(e);
//     return;
//   }

//   console.log("Database connection success!");
//   console.log("Sequelize is ready to use!");

//   const cat = Cat.build({
//     firstName: "Markov",
//     specialSkill: "sleeping",
//     age: 5,
//   });
//   await cat.save();
//   console.log(cat.toJSON());
//   // Close database connection when done with it.
//   await sequelize.close();
// }

//reading a record

// async function main() {
//   // Fetch the cat with id #1.
//   const cat = await Cat.findByPk(1);
//   console.log(cat.toJSON());
//   await sequelize.close();
// }


//updating a table
// async function main() {
//   const cat = await Cat.findByPk(1);
//   console.log("Old Markov: ");
//   console.log(cat.toJSON());
//   // The Cat object is modified, but the corresponding record in the
//   // database is *not* yet changed at all.
//   cat.specialSkill = "super deep sleeping";
//   // Only by calling `save` will the data be saved.
//   await cat.save();
//   console.log("New Markov: ");
//   console.log(cat.toJSON());
//   await sequelize.close();
// }



//destroy a record

// async function main() {
//   const cat = await Cat.findByPk(1);
//   // Remove the Markov record.
//   await cat.destroy();
//   await sequelize.close();
// }



//class method using create instead of build-save
// async function main() {
//   const cat = await Cat.create({
//     firstName: "Curie",
//     specialSkill: "jumping",
//     age: 4,
//   });

//   console.log(cat.toJSON());
//   await sequelize.close();
// }

//destroy class method
// async function main() {
//   // Destroy the Cat record with id #3.
//   await Cat.destroy({ where: { id: 3 } });

//   await sequelize.close();
// }


//retrieve all record in database
async function main() {
  // `findAll` asks to retrieve _ALL_ THE CATS!!  An array of `Cat`
  // objects will be returned.
  const cats = await Cat.findAll();
  // Log the fetched cats.
  console.log(JSON.stringify(cats, null, 2));
  await sequelize.close();
}


//selection using where OR operation by mapping a column name to an array of values
// async function main() {
//   const cats = await Cat.findAll({
//     where: {
//       firstName: ["Markov", "Curie"],
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }

//another way OR operation
// async function main() {
//   // fetch cats with name == Markov OR age = 4.
//   const cats = await Cat.findAll({
//     where: {
//       [Op.or]: [
//         { firstName: "Markov" },
//         { age: 4 },
//       ],
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }



//negate selection

// async function main() {
//   const cats = await Cat.findAll({
//     where: {
//       firstName: {
//         // Op.ne means the "not equal" operator.
//         [Op.ne]: "Markov",
//         //firstName: { "ne": "Markov" },
//       },
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }

//selection AND operation
// async function main() {
//   // fetch cats with name != Markov AND age = 4.
//   const cats = await Cat.findAll({
//     where: {
//       firstName: {
//         [Op.ne]: "Markov",
//       },
//       age: 4,
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }

//AND operation another way
// async function main() {
//   const cats = await Cat.findAll({
//     where: {
//       [Op.and]: [
//         { firstName: { [Op.ne]: "Markov" } },
//         { age: 4 },
//       ],
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }


//query with comparisons
// async function main() {
//   // Fetch all cats whose age is > 4.
//   const cats = await Cat.findAll({
//     where: {
//       age: { [Op.gt]: 4 },
//     },
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }



//order results
// async function main() {
//   const cats = await Cat.findAll({
//     //order: [["age", "DESC"]]
//     order: [["age", "DESC"], "firstName"]
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }


//limiting results
// async function main() {
//   const cats = await Cat.findAll({
//     order: [["age", "DESC"]],
//     limit: 1,
//   });
//   console.log(JSON.stringify(cats, null, 2));
//   await sequelize.close();
// }


//return maximum of the list of results
// async function main() {
//   const cat = await Cat.findOne({
//     order: [["age", "DESC"]],
//   });
//   console.log(JSON.stringify(cat, null, 2));
//   await sequelize.close();
// }



//validation
// async function main() {
//   const cat = Cat.build({
//     // Empty cat. All fields set to `null`.
//   });
//   try {
//     // Try to save cat to the database.
//     await cat.save();
//     console.log("Save success!");
//     console.log(JSON.stringify(cat, null, 2));
//   } catch (err) {
//     console.log("Save failed!");
//     // Print list of errors.
//     for (const validationError of err.errors) {
//       console.log("*", validationError.message);
//     }
//   }
//   await sequelize.close();
// }


//change attributes to meet validations
// async function main() {
//   const cat = Cat.build({
//     // Empty cat. All fields set to `null`.
//   });
//   try {
//     await cat.save();
//   } catch (err) {
//     // The save will not succeed!
//     console.log("We will fix and try again!");
//   }
//   // Fix the various validation problems.
//   cat.firstName = "Markov";
//   cat.specialSkill = "sleeping";
//   cat.age = 4;
//   try {
//     // Trying to save a second time!
//     await cat.save();
//     console.log("Success!");
//   } catch (err) {
//     // The save *should* succeed!
//     console.log(err);
//   }
//   await sequelize.close();
// }



//not empty validations

// async function main() {
//   const cat = Cat.build({
//     firstName: "",
//     specialSkill: "",
//     age: 5,
//   });
//   try {
//     // Try to save cat to the database.
//     await cat.save();
//     console.log("Save success!");
//     console.log(JSON.stringify(cat, null, 2));
//   } catch (err) {
//     console.log("Save failed!");
//     // Print list of errors.
//     for (const validationError of err.errors) {
//       console.log("*", validationError.message);
//     }
//   }
//   await sequelize.close();
// }

main();
