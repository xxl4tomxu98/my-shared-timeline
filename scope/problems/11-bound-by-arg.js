/***********************************************************************
Write a function named `boundByAnArg(function, arg)` that will accept a
function and an argument. When invoked the boundByAnArg function will return a
function that will utilize the original argument passed into boundByAnArg.

See below for an example:
function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = boundByAnArg(iSpy, "tree");
console.log(spyTree()); // prints "I spy a tree"
console.log(spyTree("car")); // prints "I spy a tree"

let spyCar = boundByAnArg(iSpy, "car");
console.log(spyCar()); // prints "I spy a car"
console.log(spyCar("potato")); // prints "I spy a car"

***********************************************************************/

// your code here!
const boundByAnArg = function (func, arg) {
  return func.bind(null, arg);
}

//option2
const boundByAnArg2 = function (func, arg) {
  return newfunc = function () {
    return func(arg);
  };
}


//their code starts below
function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = boundByAnArg2(iSpy, "tree");
console.log(spyTree()); // prints "I spy a tree"
console.log(spyTree("car")); // prints "I spy a tree"
let spyCar = boundByAnArg(iSpy, "car");
console.log(spyCar()); // prints "I spy a car"
console.log(spyCar("potato")); // prints "I spy a car"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = boundByAnArg;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
