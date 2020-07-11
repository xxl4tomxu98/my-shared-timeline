/* Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, the equation a +b *c /da+b∗c/d would become (((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return None/null (depending on your language) if the equation is "".

Task:
Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

More about order of operations: here

Key:
^ represents **
/ should always be rounded down because the result will always be an integer
Operations allowed:
+, -, * , /, ^, %

Example:
no_order(2 + 3 - 4 * 1 ^ 3) returns 1
because:

  2 + 3 - 4 * 1 ^ 3
= 2 + 3 - 4 * 1 ^ 3
= 5 - 4 * 1 ^ 3
= 1 * 1 ^ 3
= 1 ^ 3
= 1

*/

function noOrder(s) {
  // your code here
  let operators = '+-*/^%';
  let s1 = s.replace(/ /g, "");
  let arr = s1.split(/\D/g);
  let arrOp = [];
  let result = Number(arr[0]);
  for (let j = 0; j < s.length - 1; j++) {
    if (operators.includes(s[j])) {
      arrOp.push(s[j]);
    }
  }
  console.log(arr, arrOp);
  for (let i = 1; i < arr.length; i++) {
    let operator = arrOp[i - 1];
    let num = Number(arr[i]);
    if (operator === '+') {
      result += num;
    } else if (operator === '-') {
      result -= num;
    } else if (operator === '*') {
      result *= num;
    } else if (operator === '/') {
      if (num === 0) {
        return null;
      } else {
        result = Math.floor(result / num);
      }
    } else if (operator === '^') {
      result **= num;
    } else if (operator === '%') {
      if (num === 0) {
        return null;
      } else {
        result %= num;
      }
    }
  }
  return result;
}

console.log(noOrder("2 + 3- 4*1   ^  3"));
console.log(noOrder("7 *  3 - 3/  10  0"));
console.log(noOrder("1 20% 0 + 9"));
console.log(noOrder("6 9* 2+6 /  0"));
