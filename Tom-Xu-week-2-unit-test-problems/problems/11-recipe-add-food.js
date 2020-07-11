/***********************************************************************
Below we've declared a new object for a recipe that has a property representing
ingredients for this recipe.
Write a method within this object named `addFood(food)`. This method should
push the incoming food argument into the ingredients array and then return the
array of ingredients.

Examples:

recipe.ingredients // => []

recipe.addFood("milk"); // => ["milk"]
console.log(recipe) // -> {ingredients: ["milk"], addFood: ƒ}

recipe.addFood("eggs"); // => ["milk", "eggs"]
console.log(recipe) // -> {ingredients: ["milk", "eggs"], addFood: ƒ}

***********************************************************************/

const recipe = {
  ingredients: [],

  // Your code here
  addFood: function (food) {
    this.ingredients.push(food);
    return this.ingredients;
  }

};


// console.log(recipe.ingredients); // => []

// console.log(recipe.addFood("milk")); // => ["milk"]
// console.log(recipe); // -> {ingredients: ["milk"], addFood: ƒ}

// console.log(recipe.addFood("eggs")); // => ["milk", "eggs"]
// console.log(recipe); // -> {ingredients: ["milk", "eggs"], addFood: ƒ}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = recipe;
