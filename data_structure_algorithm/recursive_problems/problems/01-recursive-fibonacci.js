/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // => 1
fibonacci(2); // => 1
fibonacci(3); // => 2
fibonacci(4); // => 3
fibonacci(10); // => ???

base case fibNum === n ==> return

[0, 1, 1, 2, 3, 5, 8, 13, 21,34,55,89etc...]

1
1
2
3
34

***********************************************************************/

function fibonacci2(n) {
  if(n===0){
      return 0;
  } else if(n===1){
      return 1;
  } else {
      return fibonacci2(n-1) + fibonacci2(n-2);
  }
}

const fibonacci1 = n => n === 0 ? 0 : n === 1 ? 1 : fibonacci1(n - 1) + fibonacci1(n - 2);


//recursion with memoization
function fibonacci(n, memo={0:0, 1:1}){
  if(n in memo) return memo[n];
  memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
}


//iterative solution with tabulation O(n) time O(n) space
function fib1(n){
  let table = new Array(n+1);
  table[0] = 0;
  table[1] = 1;
  for (let i=2; i<table.length; i++){
    table[i] = table[i-2] + table[i-1];
  }
  return table[table.length-1];
}

//iterative O(n) time O(1) memory, insetad of tabulation table
// this uses a pair of array moving along addition traversion
function fib(n) {
  let mostRecentCalcs = [0, 1];
  if (n === 0) return mostRecentCalcs[0];
  for (let i = 2; i <= n; i++) {
    const [ secondLast, last ] = mostRecentCalcs;
    mostRecentCalcs = [ last, secondLast + last ];
  }
  return mostRecentCalcs[1];
}

console.log(fibonacci(1)); // => 1
console.log(fibonacci(2)); // => 1
console.log(fibonacci(3)); // => 2
console.log(fibonacci(4)); // => 3
console.log(fibonacci(10)); // => ???


console.log(fib(10));
console.log(fib(30));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
