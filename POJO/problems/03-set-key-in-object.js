/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three
parameters. The first parameter is an object, the second parameter will be a
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Write this function using the three different ways of setting a key- value pair:
1. Use Dot notation (not doable)
2. Use Bracket notation
3. Use Bracket notation using a variable


Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

function setKeyInObject(obj, string, value) {
  // your code here
  //obj[string] = value;
  //you can't use obj.string = value;
  let strName = string;
  obj[strName] = value;
  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
