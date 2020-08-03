// Write a function, stepper(nums), that takes in an array of non negative
// numbers. Each element of the array represents the maximum number of steps you
// can take from that position in the array. The function should return a
// boolean indicating if it is possible to travel from the first position of the
// array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//   - We begin at first position, 3.
//   - Since the element is 3 we can take up to 3 steps from this position.
//   - This means we can step to the 1, 0, or 5
//   - Say we step to 1
//   - Since the element is 1, now the only option is to take 1 step to land
//   on 0
//   - etc...
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through
//                                      //          elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to
//                                      //           the end
function stepper1(nums) {
  let len = nums.length;
  let judge = new Array(len).fill(false);
  if(nums[0]>=len-1) return true;
  judge[0] = true;
  for(let i=0;i<len;i++){
    if(judge[i]===true){
      for(let j=1;j<=nums[i];j++){
        judge[j] = true;
      }
    }
  }
  return judge[len-1];
}

//recursive
function stepper(nums, memo={}){
  let key = String(nums);
  console.log(key);
  if(key in memo) return memo[key];
  let len = nums.length;
  if(len===0) return true;
  if(nums[0]>=len-1) return true;
  for(let i=1;i<nums[0]+1;i++){
    if(nums[i]>=len-1-i) return true;
    if(stepper(nums.slice(i), memo)){
      memo[key] = true;
      return true;
    }
  }
  memo[key] = false;
  return false;
}

//console.log(stepper([3, 1, 0, 5, 10]));           // => true, because we can step through
//                                      //          elements 3 -> 5 -> 10
//console.log(stepper([3, 4, 1, 0, 10]));           // => true, because we can step through
//                                      //          elements 3 -> 4 -> 10
//console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8]));    // => false, there is no way to step to
//                                      //           the end

// Write a function, maxNonAdjacentSum(nums), that takes in an array of
// nonnegative numbers. The function should return the maximum sum of elements
// in the array we can get if we cannot take adjacent elements into the sum.
//
// Solve this problem with tabulation.
// Once you're done, come back and try to solve it with memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6
function maxNonAdjacentSum1(nums) {
  let n= nums.length;
  let judge = new Array(n).fill(0);
  judge[0] = nums[0];
  for(let i=1; i<n; i++){
    //as i traverses right, the considered ele is to left
    //each cell in judge is intermittant sum to the point judge[i]
    let nonNeighbor = (i-2<0)? 0 : judge[i-2] ;
    let neighbor = judge[i-1];
    let path1 = nonNeighbor + nums[i];
    let path2 = neighbor;
    judge[i] = Math.max(path1, path2);
  }
  return judge[judge.length-1];
}

// recursive memoization approach
function maxNonAdjacentSum(nums, memo={}){
  let n = nums.length;
  if(n === 0){
    return 0;
  }
  let key = String(nums);
  console.log(key);
  if(key in memo) return memo[key];
  let allSums = [];
  nums.forEach(number => {
    let path = maxNonAdjacentSum(nums.slice(nums.indexOf(number)+2), memo)+number;
    console.log(path);
    allSums.push(path);
  });
  memo[key] = Math.max(...allSums);
  return memo[key];
}

function maxNonAdjacentSum2(nums, memo={}){
  let n = nums.length;
  if(n === 0){
    return 0;
  }
  let key = String(nums);
  console.log(key);
  if(key in memo) return memo[key];
  let number = nums[0];
  //this algorithm stresses on true comparisons are between the path1 and path2
  let path1 = maxNonAdjacentSum1(nums.slice(2), memo)+number;
  let path2 = maxNonAdjacentSum1(nums.slice(1), memo);
  memo[key] = Math.max(path1, path2);
  return memo[key];
}

// console.log(maxNonAdjacentSum2([2, 7, 9, 3, 4]));   // => 15, because 2 + 9 + 4
// console.log(maxNonAdjacentSum2([4,2,1,6]));         // => 10, because 4 + 6

// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// Solve this problem with tabulation.
// You've already solved this with memoization.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
  if(amount ===0){
    return 0;
  }

  //set index of array counts as all subamounts building up to amount [0, ...amount]
  //and values should be qantities needed
  let counts = new Array(amount + 1).fill(Infinity);
  counts[0] = 0;
  //check all the ways I can use the coins in array coins
  coins.forEach(coin => {
    //check all subamounts in counts array
    for(let amt=0; amt<counts.length; amt++){
      //check all qantities of coin to reach subamounts
      for(let qty=0; qty * coin <= amt; qty++){
        let reminder = amt - qty * coin;
        let qtyAttempt = counts[reminder] + qty;
        if(qtyAttempt < counts[amt]){
          counts[amt] = qtyAttempt;
        }
      }
    }
  })
  return counts[counts.length-1];
}


console.log(minChange([1, 2, 5], 11));         // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8));         // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15));    // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100));   // => 4, because 25 + 25 + 25 + 25 = 100





module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};
