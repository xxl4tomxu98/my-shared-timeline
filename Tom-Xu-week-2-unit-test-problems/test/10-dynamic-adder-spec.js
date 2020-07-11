const assert = require("assert");

const dynamicAdder = require("../problems/10-dynamic-adder.js");

describe("dynamicAdder()", function() {
  it("should return a function that accepts a number", function() {
    const addTwo = dynamicAdder(2);

    assert.equal(addTwo(5), 7);
  });

  it("should return a new adding function for each initial argument", function() {
    const addTen = dynamicAdder(10);
    const addNinety = dynamicAdder(90);

    assert.equal(addTen(5), 15);
    assert.equal(addNinety(5), 95);
  });
});
