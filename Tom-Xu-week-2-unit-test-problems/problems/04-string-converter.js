/***********************************************************************
Write a function `stringConverter(string)` that will takes a
string as an argument and returns an object containing the count of
each character in the string.

Examples:

stringConverter("apple") // => {a: 1, p: 2, l: 1, e: 1}
stringConverter("banana") // => {b: 1, a: 3, n: 2}
stringConverter("raccoon") // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

// Your code here
function stringConverter(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char in obj) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = stringConverter;
} catch {
  module.exports = null;
}
