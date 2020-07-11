/***********************************************************************
Write a function named `callOnTarget(function, obj1, ob2)`.  `callOnTarget` will
accept a function to invoke that will use the first passed in object, (obj1), as
the context for that function call and the second passed in object, (obj2), as
an argument being passed to the function upon invocation.
Take a look at the below examples for more clarity!

**Hint**: use Function#bind()!

Examples:

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse)); // "I'm Breakfast. Nice to meet you, Jerry"
console.log(callOnTarget(greet, mouse, cat)); // "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget(dog.chase, cat, dog)); // "Woof, my name is Breakfast and I'm chasing Noodles"

***********************************************************************/

// your code here
let callOnTarget = function (func, obj1, obj2) {
  return func.bind(obj1)(obj2);
}

let callOnTarget2 = function (func, obj1, obj2) {
  return func.bind(obj1, obj2)();
}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget2(greet, cat, mouse)); // "I'm Breakfast. Nice to meet you, Jerry"
console.log(callOnTarget2(greet, mouse, cat)); // "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function (animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget2(dog.chase, cat, dog)); // "Woof, my name is Breakfast and I'm chasing Noodles"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = callOnTarget;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
