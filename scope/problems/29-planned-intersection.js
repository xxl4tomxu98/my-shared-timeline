/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

// your code here
let plannedIntersect1 = function (array1) {
  return myFunc = function (array2) {
    return array1.filter(ele => array2.includes(ele));
  }
}

let plannedIntersect = array1 => myFunc = array2 => array1.filter(ele => array2.includes(ele));


let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]


let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}