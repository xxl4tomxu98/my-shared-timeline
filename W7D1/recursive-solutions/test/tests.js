const assert = require("assert");

const fibonacci = require("../01-recursive-fibonacci.js");
const factorial = require("../02-recursive-factorial.js");

describe("fibonacci()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(10), 55);
  });

  it("should return the expected nth Fibonacci number", function () {
    assert.equal(fibonacci(5), 5);
    assert.equal(fibonacci(20), 6765);
  });
});

describe("factorial()", function () {
  it("should satisfy the examples from the problem", function () {
    assert.equal(factorial(1), 1);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(5), 120);
  });

  it("should return the expected factorial for a given number", function () {
    assert.equal(factorial(2), 2);
    assert.equal(factorial(6), 720);
    assert.equal(factorial(10), 3628800);
  });
});