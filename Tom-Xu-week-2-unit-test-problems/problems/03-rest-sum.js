/***********************************************************************
Write a function named `restSum` that accepts all incoming arguments and
returns their sum.

Examples:

restSum(3, 5, 6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

// Your code here
function restSum(...rest) {
  return rest.reduce((acc, curr) => acc + curr);

}

console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = restSum;
} catch {
  module.exports = null;
}
