const assert = require("assert");
const {returnsThree, reciprocal} = require("../problems/number-fun.js");

describe("function returnsThree()", () => {
  it("should return number 3", () => {
    let result = returnsThree();
    assert.equal(result, 3);
  });
});

describe("function reciprocal()", () => {
  context("when input number between 1 and 1,000,000", ()=>{
    it("should return 1/number", () => {
      let expected = 0.25;
      let num = 4;
      assert.equal(reciprocal(num), expected);
      assert.strictEqual(reciprocal(20), 0.05);
    });
  });

  context("when input number < 1 or > 1,000,000", ()=>{
    it("should throw a TypeError when number is too large or small", ()=>{
      assert.throws( () => reciprocal(0), TypeError);
      assert.throws( () => reciprocal(-20), TypeError);
      assert.throws( () => reciprocal(10000000), TypeError);
    });
  });
});
