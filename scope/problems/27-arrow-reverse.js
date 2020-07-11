/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!
let arrowReverseString = str => str.split('').reverse().join('');

let result1 = arrowReverseString("hello"); // returns "olleh"
console.log(result1);
let result2 = arrowReverseString("garden"); // returns "nedrag"
console.log(result2);
let result3 = arrowReverseString("potato"); // returns "otatop"
console.log(result3);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
