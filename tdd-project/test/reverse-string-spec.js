const assert = require("assert");
const reverseString = require("../problems/reverse-string.js");
describe("reverseString()", ()=>{

  it("should return the letters backward from the end to beginning", ()=>{
    let correctRev = "nuf";
    let str = "fun";
    let result = reverseString(str);
    assert.deepEqual(result, correctRev);
  });

  context("when given arg is not a string", ()=>{
    it("throw a type error if given arg is not a string", ()=>{

      assert.throws( () => reverseString(false), TypeError);

    });
  });
});
