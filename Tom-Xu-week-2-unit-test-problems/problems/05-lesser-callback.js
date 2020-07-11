/*******************************************************************************
Write a function `lesserCallback` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is smaller.

Examples:

let doubler = function (n) {
    return 2 * n;
};

let squarer = function (n) {
    return n * n;
};

console.log(lesserCallback(5, doubler, squarer));     // 10
console.log(lesserCallback(1, doubler, squarer));     // 1
console.log(lesserCallback(9, Math.sqrt, doubler));   // 3
*******************************************************************************/

// Your code here
function lesserCallback(value, cb1, cb2) {
  if (cb1(value) < cb2(value)) {
    return cb1(value);
  } else {
    return cb2(value);
  }
}

let doubler = function (n) {
  return 2 * n;
};

let squarer = function (n) {
  return n * n;
};

console.log(lesserCallback(5, doubler, squarer));     // 10
console.log(lesserCallback(1, doubler, squarer));     // 1
console.log(lesserCallback(9, Math.sqrt, doubler));   // 3



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = lesserCallback;
} catch {
  module.exports = null;
}
