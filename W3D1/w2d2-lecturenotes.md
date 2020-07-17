### Learning Objectives

- POJO Objectives
  - Label variables as either Primitive vs. Reference
  - Identify when to use . vs [] when accessing values of an object
  - Write an object literal with a variable key using interpolation
  - Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object
  - Utilize Object.keys and Object.values in a function
  - Iterate through an object using a for in loop
  - Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments
  - Use ...spread syntax for Object literals and Array literals
  - Destructure an array to reference specific elements
  - Destructure an object to reference specific values
  - Write a function that accepts a string as an argument and returns an object representing the count of each character in the array
- Pair Programming Objectives
- Ask about how their first "project" went(local javascript project)

### Object Lecture

- "POJO" is not an official term
- not ordered
- if we look for a key that doesn't exist yet, "undefined" gets returned
  - this can be useful since "undefined" is "falsy"
- can reassign just as easily as we assign
  - obj["a"] = "car"; obj["a"] = "newCar"
- a key in an object can point to anything, including another object!

```js
let a = { key1: "value1", a: 33 };
a.other = { nest1: "this is deeep" };
a.next = [1, 2, 3];
```

### Primitive vs Reference

- Primitives are immutable data types
  - string, number, boolean, null, undefined, symbol(new)
- reference types are mutable

```js
let a = { key1: "value1", a: 33 };
let b = a;
a.key1 = "newstringsss";
console.log(b["key1"]); // expect to see "newstringsss"
```

### Array/Object Destructuring

- Array Destr
  - var names need to also be inside of an array on left side of assignment operator(=)
  - if more var names than elements in array, those var names will point to undefined
- Object Destr

  - when working with objects, will need to know the key name/word to first retrieve the value(later can alias to a new var name)

  ```js
  let arr = ["string1", 17, 800, { does: "this work?" }];
  let [first, num1, num2, obj, nothing] = arr;

  let a = { key1: "value1", a: 33 };
  a.other = { nest1: "this is deeep", otherKey: "strings" };
  let {
    other: { nest1: special },
  } = a; // can even alias when destructuring nested elements in obj
  console.log(special);

  let {
    other: { nest1: banana, otherKey: testVar },
  } = a;
  // let banana = a.other.nest1;
  console.log("other", testVar); // "strings";
  console.log("nest1", banana); // "this is deeep";
  ```

  ```js
  // function destructuring of function parameters
  let a = { name: "value1", age: 33 };
  a.other = { nest1: "this is deeep", otherKey: "strings" };
  //a === { name: "value1", age: 33 , other: { nest1: "this is deeep", otherKey: "strings" }}

  function tester({ other: { nest1: usefulName } }) {
    console.log("nested", usefulName);
  }

  tester(a);
  ```

- in the lecture example the `{}` in `{name}` refers to the full object thats getting passed into the function and when we add `name` in between them, much like with destructuring for variables it is because we know that input argument has a key of `name` that we want to store as a variable with the same name

### Spread and Rest

- Rest <-- when using the operator in the function parameters
- creates an array of arguments with the designated var name
- Spread <-- when using the operator inside the function body, or outside of a function
- takes a collection(array and array-like objects) and separates them into individual elements

```js
function testeroni(arg1, arg2, ...banana) {
  console.log(arg1);
  console.log(banana); // this will create an array for us with arguments every other argument(not including the first two already captured in "arg1" and "arg2") passsed into this function
}

testeroni("argOne", "argTwo", 1, 2, "something", { key: "value" });

let arr = [];
let additions = ["add", "me", "please"];
arr.push(additions); // [["add", "me", "please"]];
arr.push(...additions); // ["add", "me", "please"];

let obj = { a: "string1", b: "something new", c: { nest: "nester" } };
let obj2 = { newKey: "spicy", ...obj }; // {newKey: "spicy", a: "string1", b: "something new", c: {nest: "nester"}}
// let obj2 = {newKey: "spicy", ...obj.c} // {newKey: "spicy", nest: "nester"}
```

### Pair Programming Demo

- communication is key!
- Use a timer!
- focus on the task at hand! Just because you aren't the one typing the code, doesn't mean that you shouldn't still be focused primarily on the code that your pair is working on
- communication is key key key
