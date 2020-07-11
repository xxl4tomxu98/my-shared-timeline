const assert = require("assert");

const recipe = require("../problems/11-recipe-add-food.js");
describe("recipe#addFood()", function() {
  it("should add the new food to the ingredients list and return the ingredients", function() {
    let test1 = recipe.addFood("milk");
    let result1 = ["milk"];

    assert.deepEqual(test1, result1);

    let test2 = recipe.addFood("eggs");
    let result2 = ["milk", "eggs"];

    assert.deepEqual(test2, result2);
  });
});
