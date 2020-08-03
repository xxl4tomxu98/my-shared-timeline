// Work through this problem on https://leetcode.com/problems/minimum-path-sum/
// and use the specs given there. Feel free to use this file for scratch work.
/* Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.*/

function minPathSum2(grid) {
  let m = grid.length;
  let n = grid[0].length;
  //minimization problem initializign with Infinity later replace
  let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
  //table holds minimum sum to this position
  table[0][0] = grid[0][0];
  //plan to store intermittant sums in cells of table
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      //check to see if minimum sum path is less than existing cell sum
      if(j < n-1){
        table[i][j+1] = Math.min(table[i][j] + grid[i][j+1], table[i][j+1]);
      }
      if(i < m-1){
        table[i+1][j] = Math.min(table[i][j] + grid[i+1][j], table[i+1][j]);
      }
    }
  }
  return table[m-1][n-1];
}


//recursive solution
function minPathSum(grid){
  let m = grid.length - 1;
  let n = grid[0].length - 1;
  return path(grid, 0, 0, m, n, 0);
}
function path(grid, rowIdx, colIdx, m, n, length){
  let value = grid[rowIdx][colIdx];
  console.log(value);
  if(rowIdx===m && colIdx===n){
    return length + value;
  }
  let rightPath = (colIdx<n)
  ? path(grid, rowIdx, colIdx+1, m, n, length+value)
  :Infinity;
  let leftPath = (rowIdx<m)
  ? path(grid, rowIdx+1, colIdx, m, n, length+value)
  :Infinity;
  return Math.min(leftPath, rightPath);
}


let grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

let grid1 = [[2]];
console.log(minPathSum2(grid));
