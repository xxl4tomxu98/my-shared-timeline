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
***********************************************************************/

//version 0 -- no-memo
// function fibonacci(n){
//     if(n === 1) return 1;
//     if(n === 2) return 1;
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// version 1 -- global memo variable
// let memo = { 1: 1, 2: 1}
// function fibonacci(n) {
//     if(memo[n]){ return memo[n] }
//     memo[n] = fibonacci(n-1) + fibonacci(n-2);
//     return memo[n];
// }

// // version 2 -- internal memo variable
function fibonacci(n, memo={ 1: 1, 2: 1}) {
    if(memo[n]){ return memo[n] }
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    return memo[n];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
  