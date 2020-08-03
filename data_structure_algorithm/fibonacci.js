//memoization with only two element array forgetting prior
// O(n) time O(1)memory
let fibonacciSequence = function (length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  }

  let seq = [1, 1];
  while (seq.length < length) {
    let last = seq[seq.length - 1];
    let secondLast = seq[seq.length - 2];
    let next = last + secondLast;
    seq.push(next);
  }
  return seq;
};

function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [ secondLast, last ] = mostRecentCalcs;
    mostRecentCalcs = [ last, secondLast + last ];
  }

  return mostRecentCalcs[1];
}
//requires returning an array of fib sequence
function fibonacciSequence2(num) {
  if (num === 0) {
    return [];
  }
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(fib(i));
  }
  return arr;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
console.log(fibonacciSequence(15));  // [ 1, 1, 2, 3, 5, 8, 13, 21...]

console.log(fibonacciSequence2(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence2(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence2(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence2(0));  // [ ]
console.log(fibonacciSequence2(1));  // [ 1 ]
console.log(fibonacciSequence2(2));  // [ 1, 1 ]
console.log(fibonacciSequence2(15));
