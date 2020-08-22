
# MIGRATIONS

`npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"`
- generates model and migration file
- COMMON ERROR: adding a space between commas

`npx sequelize db:migrate`
- runs migration's "up" method
- keeps track of migrations that have been run 
- adds a row to the `sequelizeMeta` table which tracks all schema migration

`npx sequelize db:migrate:undo`
- rollsback a migration, calls "down" method
- only do it you havent pushed to git
- can now edit "up" method & add columns
- after, rerun migration 

`up` and `down` are async
- sequelize expects "up" to return a promise
- createTable also returns a promise
- can use async/await when writing your own migration


```js
module.exports = {
  // Note the addition of the `async` keyword
  up: async (queryInterface, Sequelize) => {
    // await `createTable` to finish its work.
    await queryInterface.createTable('Cats', {
      // ...
    });

    // No need to return anything. An `async` method always returns a
    // Promise that waits for all `await`ed work to be performed.
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cats');
  }
};
```


# SEEDING
```bash
$ npx sequelize-cli seed:generate --name <descriptiveName>
```
- generates a new seed file
- seed files are like data migrations and also contain `up` and `down` methods

```bash
$ npx sequelize-cli db:seed:all
```
- runs all pending seed files
- adds a row to the `SequelizeData` table

```bash
$ npx sequelize-cli db:seed:undo:all
```
- runs the `down` method on all seed files
- removes the row in the `SequelizeData` table

# CRUD OPERATIONS 


```js
// index.js

async function main() {
  // creating a new record 
    const cat2 = Cat.build({
      firstName: "Markov",
      specialSkill: "sleeping",
      age: 5,
		});
		
    // saves record in database
    await cat2.save();


    // finds a cat by their id
    const cat1 = await Cat.findByPk(1);


    // updating a record
    cat1.specialSkill = "super sleepy";
    await cat1.save();


    // destroying a record 
    await cat1.destroy();


    // class create method (build + save)
    const cat3 = await Cat.create({
      firstName: "Bob"
    })


    // class destroy method (find + destroy)
    await Cat.destroy({ where: { id: 3 } })
}
```

Class methods for CRUD
- avoid unneccesary fetch when destroying

# QUERYING WITH SEQUELIZE


```js
// index.js



// FIND ALL CATS, RETURNS ARRAY 
async function fetchAllCats() {
  let cats = await Cat.findAll();

  // log fetched cats, null skips 2nd arg, third arg is spacing
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();  
}


// FIND CAT BY ID, RETURNS ARRAY 
async function fetchCatById() {

	// finds cat with id 1
  let cat = await Cat.findByPk(1);

  // log fetched cat, null skips 2nd arg, third arg is spacing
  console.log(JSON.stringify(cat, null, 2));

  await sequelize.close();  
}




// FIND SINGLE CAT RECORD, RETURNS NULL IF NOT FOUND 
async function fetchOldestCat() {

	// selects oldest cat 
	let cat = await Cat.findOne({
		order: [["age", "DESC"]]
	})

  // log fetched cats, null skips 2nd arg, third arg is spacing
  console.log(JSON.stringify(cat, null, 2));

  await sequelize.close();  
}



// FIND ALL CATS WITH SPECIFIED CRITERIA
async function fetchCats() {

  // fetch based on criteria
  let cats = await Cat.findAll({
    where: {
      // find all named markov
      firstName: "Markov",

      // find cats named markov or curie
      firstName: ["Markov", "Curie"],

      // find cats where firstname "not equal" to markov
      // and age = 4
      firstName: {
        [Op.ne]: "Markov"
      },
      age: 4

      // same as above using "and" op[]
      [Op.and]: [
        { firstName: { [Op.ne]: "Markov" } },
        { age: 4 }
      ],

      // fetch cats with name == markov OR age = 4
      [Op.or]: [
        { firstName: "Markov" },
        { age: 4 },
      ],

      // greater than (Op.gt) or less than (Op.lt)
      age: { [Op.gt]: 4 },

      // ordering result desc
      order: [["age", "DESC"]],

      // ordering result asc
      order: ["age"],

      // ordering by multiple things
      order: [["age", "DESC"], "firstName"],

      // using limit to get oldest cat in array
      limit: 1
    }
	});

  // log fetched cats, null skips 2nd arg, third arg is spacing
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();  
}
```


# MODEL VALIDATIONS 

validation
- js code that makes sure data is valid before saving to db
- contrast with database constraints which are rules defined at the SQL level
- modify model definition

validating attribute is not NULL or empty
- sequelize checks validations when save method is called
- save will throw a ValidationError exception if validation fales
- handle using try/catch block
- should also validate for notEmpty or "" would be valid

```js
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: {
      // tells sequelize how to config this attrib
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // what to do when value is null
        notNull: {
          msg: "firstName must not be null",
        },
        notEmpty: {
          msg: "firstName must not be empty",
        },
        // limit name length
        len: {
          args: [0, 8],
          msg: "firstName must not be more than eight letters long",
        },
        isIn: {
          // double nested b/c passing one arg, array of 3 values
          args: [["bob", "joe"]],
          msg: "name must be either bob or joe",
        },
      },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "age must not be null",
        },
        min: {
          args: [0],
          msg: "age must not be less than zero",
        },
        max: {
          args: [99],
          msg: "age must not be greater than 99",
        },
      },
    }
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```


```js

// this would result in errors due to null values
async function main() {
  const cat = Cat.build({
    // Empty cat. All fields set to `null`.
  });

  try {
    // Try to save cat to the database.
    await cat.save();

    console.log("Save success!");
    console.log(JSON.stringify(cat, null, 2));
  } catch (err) {
    console.log("Save failed!");

    // Print list of errors.
    for (const validationError of err.errors) {
      console.log("*", validationError.message);
    }
  }

  await sequelize.close();
}
```


# ASSOCIATIONS 

Tables For Following Example
1. `Ingredient`
	 - `id`
   - `amount`
   - `measurementUnitId`
   - `foodstuff`
   - `recipeId`
2. `Instruction`
	 - `id`
   - `specification`
   - `listOrder`
   - `recipeId`
3. `Recipe`
   - `id`
   - `title`
4. `MeasurementUnit`
	 - `id`
   - `name`


Associations Overview
- `Recipe` has_many `Ingredients`
- `Ingredient` belongs_to `Recipe`
	* foreign_key `recipeId` references `id` column in `Recipes` table
- `MeasurementUnit` has_many `Ingredients`
- `Ingredient` belongs_to `MeasurementUnit`
	* foreign_key `measurementUnitId` references `id` column in `MeasurementUnit` table
- `Recipe` has_many `Instructions`
- `Instruction` belongs_to `Recipe`
	* foreign_key `recipeId` references `id` column in `Recipes` table



```js
'use strict';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Recipe.associate = function(models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };
  return Recipe;
};
```

# USING ASSOCIATIONS TO QUERY 
Tables For Following Example
1. `Pets`
	 - columns: `id`, `name`, `petTypeId`, `age`
2. `PetOwners`
	 - columns: `id`, `petId`, `ownerId`
3. `Owners`
   - columns: `id`, `firstName`, `lastName`
4. `PetTypes`
	 - columns: `id`, `type`

```js
const { Pet, Owner, PetType, sequelize } = require('./models');

async function queryPetsTypesAndOwners() {
  
  // eager load PetType and Owners so we have those records available too
  const pet = await Pet.findByPk(1, { include: [PetType, Owner] });

  console.log(
    pet.id,
    pet.name,
    pet.age,
    pet.petTypeId,
    pet.PetType, // actual PetType object
    pet.PetType.type, // can key into this object
  )

  for (let owner of pet.Owners) {
    console.log(owner.id, owner.firstName, owner.lastName)
  }

  // eager load pet and petTypes
  // only goes one step, so if want to include PetTypes too
  const owner = await Owner.findByPk(1, { 
    include: {
      model: Pet,
      include: PetType
    }
  })

  for (let pet of owner.Pets) {
    console.log(pet.id, pet.name, pet.age, pet.petType)
  }
}
```