/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// your code here!
const arrowAvgValue2 = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}

const arrowAvgValue = array => {
  let reducer = (acc, curr) => acc + curr;
  const sum = array.reduce(reducer);
  return sum / array.length;
}

const arrowAvgValue1 = array => {

  const sum = array.reduce(function (acc, curr) {
    return acc + curr;
  });
  return sum / array.length;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
