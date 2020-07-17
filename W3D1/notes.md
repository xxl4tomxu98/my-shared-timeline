# Callbacks


overview
- funcs are first class obj (can be stored in var)
- callback: funcs that is passed to other func as an argument

```js

// can pass named functions as callbacks

let myFunc = function(callback) {
  console.log("inside function");

  // invoking callback invokes myCallback function
  callback();
}

let myCallback = function() {
  console.log("inside callback");
}

myFunc(myCallback);


// can pass anonymous functions as callbacks


let myFunc = function(callback) {
  console.log("inside function");
  callback();
}

myFunc(function() {
  console.log("inside callback")
})

```



callbacks
- behaves just like any other func
- can accept its own args and return a value
- make code very dynamic


arguments in javascript
- params that don't have arguments with contain value undefined
- can pass too few arguments without issues


```js


let add = function(num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1+num2);
  }
}

console.log(add(9, 40)); // 48
console.log(add(9, 40, Math.sqrt)); // 7

```


# Functions as first class objects


first class objects
- type of obj that supports same basic ops as other types
- numbers, strings, booleans are first class obj
- three main operations FCO should support:


1. first class objects can be assigned to variables
2. first class objects can be passed as arguments
3. first class objects can be return values 


```js

const sayHello = function(name, callback) {
  const initials = callback(name);

  console.log(`hello ${initials}`);
}

const getInitials = function(name) {
  const names = name.split(' ');

  return names[0][0] + names[1][0];
}

sayHello('Alissa Crane', getInitials)

```

higher order function
- accepts a func as an argument or returns a func 


```js

function foo() {
  function bar() {
    console.log("I am a function");
  }

  return bar;
}

console.log(foo());

let func = foo();
func()

```