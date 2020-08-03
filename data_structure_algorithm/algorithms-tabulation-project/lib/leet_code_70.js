// Work through this problem on https://leetcode.com/problems/climbing-stairs/
// and use the specs given there. Feel free to use this file for scratch work.
/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

function climbStairs(n) {
  let table = new Array(n+1);
  //for 0 stairs only 1 way = zero steps
  table[0] = 1;
  table[1] = 1;

  for(let i=2; i<table.length; i++){
    table[i] = table[i-2] + table[i-1];
  }
  return table[table.length-1];
}
