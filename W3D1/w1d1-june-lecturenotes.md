# Expressions Learning Objectives
> Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
* REPL stands for read-exec-print-loop and is just an interactive shell that allows us to run javascript commands
* Right now we're running everything in the open.appacademy REPL but starting next week we'll be running things locally on our computer
> Identify that strings are a list of characters defined by using double or single quotes
* Strings are our first of several datatypes that we'll be working with -- datatypes allow us to tell our program what type of information is being stored so that it knows what it can do with it.
* Strings are defined using either single or double quotes, but you have to be consistent
```javascript
'hello world'
"My dog's name is Benny" // have to use double quotes because I have a single quote within the string
"Benny's favorite thing to say is \"Woof Woof!\""
"Benny's favorite thing to say is " + '"Woof Woof!"'
```
> Given an arithmetic expression using +, -, *, /, %, compute its value
```javascript
console.log(1 + 1)
console.log(12 - 1)
console.log(2 * 2)
console.log(2 / 3)
console.log(9 % 2)
```
> Given an expression, predict if its value is NaN
 Sometimes it's hard to predict the value of expressions - sometimes, all you can say is [Wat](https://www.destroyallsoftware.com/talks/wat).
​
 Of course, `NaN` makes sense in many instances, and as long as you are being considerate of your types, you wont become WatMan.
​
```js
let num;
​
console.log(num + 3);
console.log("fish" / 2);
```
​
 **TIP**: If you're ever in doubt about the way that an expression would evaluate, use a REPL to check for yourself!
​
> Construct the truth tables for &&, ||, !
 I think we can do even better.  Let's make a truth table for `!((A || B) && B)`
​
 Like with all mathematical and logic based problems we start by solving the parenthetic groups, and work from inside out.
​
 Starting with `A || B` we get our first truth table
​
    
| `A`     | `B`     | `A || B` |
|-------|-------|--------|
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
​
​
​
 Then we use `A || B` as input into our second truth table
​
| `A`     | `B`     | `A || B` | `(A || B) && B` |
|-------|-------|--------|---------------|
| true  | true  | true   | true          |
| false | true  | true   | true          |
| true  | false | true   | false         |
| false | false | false  | false         |
​
 And finally negate that solution for our final answer
​
| `A`     | `B`     | `A || B` | `(A || B) && B` | `!((A || B) && B)` |
|-------|-------|--------|---------------|------------------|
| true  | true  | true   | true          | false            |
| false | true  | true   | true          | false            |
| true  | false | true   | false         | true             |
| false | false | false  | false         | true             |
​
> Given an expression consisting of >, >=, ===, <, <=, compute it’s value
* For numbers, this should be pretty straightforward - works exactly the same as the algebra you were taught in high school
* We can also use these operators on strings
```javascript
console.log('a' < 'b');
console.log('z' < 'A');
console.log('42' === 42);
console.log('three' === 3);
```
> Apply De Morgan’s law to a boolean expression
​
A Picture Is Worth 1000 Words
​
> Given an expression that utilizes operator precedence, compute its value
 
 Javascript uses normal mathematial precedence.  You can remember it with the anogram **BEDMAS**
​
 * **B**rackets
 * **E**xponents
 * **D**ivision
 * **M**ultiplication
 * **A**ddition
 * **S**ubtraction
  Given a ambiguous mathematical expression
​
```js
console.log(1 - 1 * 10);
```
​
 JavaScript will first apply the multiplication, and then will apply subtraction.  
 
 Therefore the result is `1 - 10 = -9` instead of `0 * 10 = 0`.
​
> Given an expression, use the grouping operator to change it’s evaluation
​
```js
console.log((1 - 1) * 10);
```
​
> Given expressions using == and ===, compute their values
​
```js
console.log(10 == "10");
​
console.log(null == undefined);
​
console.log(0 == null);
```
​
 It's unpredictable, `===` is much better:
​
> Given a code snippet using postfix ++, postfix --, +=, -=, /=, *=, predict the value of labeled lines
```javascript
let x = 10;
x--;
x - 1;
x += 3;
console.log(x);
```
​
> Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
​
## Intro to Functions
​
1. Define a function using function declaration
​
```js
function sayHello() {
	console.log("Hello, World!");
}
```
​
2. Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
​
```js
function average(num1, num2) {
	return (num1 + num2) / 2;
}
console.log(average(1, 3));
console.log(average(5, 10));
```
​
3. Identify the difference between parameters vs arguments
​
 Parameters are specified in the function declaration
​
```js
// num1, num2 are parameters
function average(num1, num2) {
	return (num1 + num2) / 2;
}
```
​
 Arguments are passed into a function.
​
```js
// 1 and 3 are arguments to the `average` function.
average(1, 3);
```