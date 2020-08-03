/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // => 1
factorial(3); // => 6
factorial(5); // => 120
***********************************************************************/

function factorial1(num) {
  if(num===1){
    return 1;
  }
  return num * factorial1(num-1);
}

const factorial2 = num => num === 0 ? 1 : num * factorial2(num - 1);


//recursion with memoization
function factorial3(num, memo={1:1}){
  if(num in memo) return memo[num];
  memo[num] = num * factorial3(num-1, memo);
  return memo[num];
}

//iterative with tabulation O(n)time O(n)memory
function factorial4(num){
  let table = new Array(num+1);
  table[1] = 1;
  for(let i=2; i<table.length; i++){
    table[i] = table[i-1] * i;
  }
  return table[table.length-1];
}

// or use reduce
function factorial5(num) {
  let memory = [];
  for (let i = 1; i <= num; i++) {
    memory.push(i);
  }
  return memory.reduce((accum, el) => accum * el);
}

//O(n) time O(1) memory
function factorial(num){
  let mostRecentCalcs = 1;
  for(let i=2; i<=num; i++){
    mostRecentCalcs = i * mostRecentCalcs;
  }
  return mostRecentCalcs;
}




console.log(factorial(1)); // => 1
console.log(factorial(3)); // => 6
console.log(factorial(5)); // => 120
console.log(factorial5(10)); // => 3628800
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
