/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false

let obj2 = {name: 'Fido', color: 'brown'}
doesKeyExist(obj2, 'course'); // => false
doesKeyExist(obj2, 'name'); // => true
***********************************************************************/

// Your code here
function doesKeyExist(obj, key) {
  return key in obj;
}

let obj1 = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
console.log(doesKeyExist(obj1, 'course')); // => true
console.log(doesKeyExist(obj1, 'name')); // => false

let obj2 = { name: 'Fido', color: 'brown' }
console.log(doesKeyExist(obj2, 'course')); // => false
console.log(doesKeyExist(obj2, 'name')); // => true



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = doesKeyExist;
} catch {
  module.exports = null;
}
