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
  } else if(n<=1){
      return 1;
  } else {
      return fibonacci2(n-1) + fibonacci2()(n-2);
  }
}

const fibonacci = n => n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

console.log(fibonacci(1)); // => 1
console.log(fibonacci(2)); // => 1
console.log(fibonacci(3)); // => 2
console.log(fibonacci(4)); // => 3
console.log(fibonacci(10)); // => ???
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
