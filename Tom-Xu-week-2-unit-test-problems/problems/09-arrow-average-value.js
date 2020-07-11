/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// Your code here
let arrowAvgValue = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(arrowAvgValue([10, 20])); // => 15
console.log(arrowAvgValue([2, 3, 7])); // => 4
console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowAvgValue;
} catch {
  module.exports = null;
}
