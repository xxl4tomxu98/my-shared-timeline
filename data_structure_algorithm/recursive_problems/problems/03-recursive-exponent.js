/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // => 9
exponent(2, -2); // => 1/4 (or 0.25)
factorial(5, 5); // => 3,125
***********************************************************************/

function exponent1(num, power) {
    if (power === 1)  return num;
    if (power < 0)  return 1/exponent1(num, Math.abs(power));
    return num * exponent1(num, power - 1);
}

function exponent2(num, power) {
  if (power === 0)
      return 1;
  else if (power < 0){
    return exponent2(num, power + 1)/num;
  } else{
    return num * exponent2(num, power - 1);
  }
}


//recursion with memoization
function exponent(num, power, memo={}) {
  let key = num + '-' + power;
  if(power === 1)  return num;
  if(key in memo) return memo[key];
  if (power < 0){
    memo[key] = 1/exponent(num, Math.abs(power), memo);
  } else {
    memo[key] = num * exponent(num, power - 1, memo);
  }
  return memo[key];
}


//tabulation with iterative
function exp(num, power){
  let table = new Array(Math.abs(power)+1);
  table[0] = 1;
  if(power > 0){
    for(let i=1; i<=power; i++){
      table[i] = num * table[i-1];
    }
  } else {
    for(let i = -1; i >=power ; i--){
      table[-i] = 1/num * table[-i-1];
    }
  }
  return table[table.length-1];
}

console.log(exponent(3, 2)); // => 9
console.log(exponent(2, -2)); // => 1/4 (or 0.25)
console.log(exponent(5, 5)); // => 3,125

console.log(exp(3, 2)); // => 9
console.log(exp(2, -2)); // => 1/4 (or 0.25)
console.log(exp(5, 5)); // => 3,125
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = exponent;
