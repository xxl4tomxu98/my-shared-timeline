/***********************************************************************
Write a function named `changeContext(function, object)` that will accept a
function and an object. The changeContext function should return the result of
the function being invoked with the passed in object as it's context.

Take careful note of how this is invoked:

let map = {
  secret: "I don't know where I'm going",
};

let bat = {
  secret: "I'm scared of the dark",
};

function getSecret() {
  return this.secret;
}

console.log(changeContext(getSecret, bat)); // prints "I'm scared of the dark"
console.log(changeContext(getSecret, map)); // prints "I don't know where I'm going"

***********************************************************************/

// your code here!
let changeContext = function (func, obj) {
  let funcObj = func.bind(obj);
  return funcObj();
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = changeContext;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
