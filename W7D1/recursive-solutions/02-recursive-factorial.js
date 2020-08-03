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
// version 0 -- no memoization
// function factorial(num) {
//     if (num === 0) return 1
//     return num*factorial(num-1)
// }

// version 1 -- memoization global var
// let memo = {0: 1}
// function factorial(num) {
//     if (num in memo) return memo[num];
//     memo[num] = num*factorial(num-1);
//     return memo[num];
// }

// version 2 -- memoization internal var
// function factorial(num, memo={0: 1}) {
//     if (num in memo) return memo[num];
//     memo[num] = num*factorial(num-1, memo);
//     return memo[num];
// }

// version 3 -- tabulation (o(n) space)

// function factorial(num) {
//     let table = new Array(num)
//     table[0] = 1
//     for (let i=1; i<=num; i++) {
//         table[i] = i*table[i-1]
//     }
//     console.log(table)
//     return table[num]
// }

// verstion 4 -- tabulation o(1) space
function factorial(num) {
    current = 1
    for (let i=2; i<=num; i++) {
        current = current * i
    }
    return current
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
