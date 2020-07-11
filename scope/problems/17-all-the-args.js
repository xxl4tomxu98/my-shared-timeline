/***********************************************************************
Write a function named `allTheArgs`. This function will intake a function and
multiple arguments and will return a function. When the function
returned by the allTheArgs function is invoked it will pass the arguments from
the first call of allTheArgs *as well as the arguments when it is invoked*.

Example 1:
const adder = (...nums) => nums.reduce((num, sum) => sum + num);

let addFive = allTheArgs(adder, 5);

console.log(addFive()); // prints 5
console.log(addFive(5)); // prints 10
console.log(addFive(10)); // prints 15

let addTwenty = allTheArgs(adder, 5, 10, 5);

console.log(addTwenty(5)); // prints 25
console.log(addTwenty(10)); // prints 30

Example 2:
const bow = (...names) => {
  let nameArr = Array.from(names);
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"

***********************************************************************/
// your code here!
let allTheArgs = function (func, ...args1) {
  return secondArg = function (...args2) {
    return func(...args1, ...args2);
  };
};

const adder = (...nums) => nums.reduce((sum, num) => sum + num);

let addFive = allTheArgs(adder, 5);

console.log(addFive()); // prints 5
console.log(addFive(5)); // prints 10
console.log(addFive(10)); // prints 15

let addTwenty = allTheArgs(adder, 5, 10, 5);

console.log(addTwenty(5)); // prints 25
console.log(addTwenty(10)); // prints 30

const bow = (...names) => {
  let nameArr = Array.from(names);
  return "You bowed to " + names.join(" and ");
};

console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = allTheArgs;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
