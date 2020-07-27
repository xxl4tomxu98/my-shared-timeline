/* Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset. For example, given an array arr=[-2, 1, 3, -4, 5] we have the following possible subsets:
Subset      Sum
[-2, 3, 5]   6
[-2, 3]      1
[-2, -4]    -6
[-2, 5]      3
[1, -4]     -3
[1, 5]       6
[3, 5]       8
Our maximum subset sum is 8.

Firstly, my assumption that you won't use this array again is significant, as this solution overwrites the initial values. You can circumvent this by simply using a temporary array to store updated values.
arr[0] = Math.max(0, arr[0]);
This is where my assumption that the empty set is a valid subset comes into play. Were we to only consider subsets of size >= 1, we'd have to concern ourselves with finding the least negative number in an array of purely negative numbers. However, since we can use the empty set, 0 is a valid sum for an array of purely negative integers.
arr[1] = Math.max(arr[0], arr[1]);
Getting setup for the actual iteration.
for (int i = 2; i < arr.length; i++) arr[i] = Math.max(arr[i-1], arr[i]+arr[i-2]);
This is where the magic happens. Essentially, we sum from arr[0] up to arr[n-1]. Since we're only concerned with non-sequential subsets, we must choose if we want the optimal sum of the previous index, arr[i-1], or to keep the current index's value and the optimal sum of non-sequential values before it, arr[i]+arr[i-2]. Note that at this point, arr[i-1] and arr[i-2] store the optimal sums possible at those two locations, not their original values.
return arr[arr.length-1];
Finally, we return the maximum sum available at the last index of the array, which is simply the max non-sequential subset sum of the whole array.
*/

function nonAdjacentSubsets(arr) {
  if (arr.length < 3) {
    return [];  // return empty list if array length is 0, 1 or 2
  } else if (arr.length===3){
    return [arr[0], arr[2]];
  } else {
    // keep in mind that smaller is a array of subsets itself
    let smaller = nonAdjacentSubsets(arr.slice(0, arr.length - 2));  // all subsets without last two elements
    let extra = arr[arr.length - 1];  // create a array slice of just last element
    // newArr is a array of subArrays, we append subArrays into it
    let newArr = [];
    for (const small of smaller) {
    // for all smaller solutions, add one with last element, here arr small concatenate with arr extra
    newArr.append([...small, ...extra]);
    }

    // concatenate array smallers and new
    return [...smaller, ...newArr];  // combine those with last element and those without
  }
}

function maxSubsetSum(arr) {
  if (arr.length == 0) return 0;
  arr[0] = Math.max(0, arr[0]);
  if (arr.length == 1) return arr[0];
  arr[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++){
    arr[i] = Math.max(arr[i-1], arr[i]+arr[i-2]);
  }
  return arr[arr.length-1];
}

//dynamic programming memoization using array
function maxSubsetSum2(arr) {
  let dp =[];
  let n = arr.length;
  if(n===1){
    return Math.max(0,arr[0]);
  } else if (n===2){
    return Math.max(arr[0], arr[1]);
  } else {
    dp.push(Math.max(0,arr[0]));
    dp.push(Math.max(arr[0], arr[1]));
    for(let i=2; i<n; i++) {
      dp.push(Math.max(dp[i-2],Math.max(dp[i-1],dp[i-2]+arr[i])));
    }
    return Math.max(dp[n-1],dp[n-2]);
  }
}

let inputArr = [-12, 34, -124, -123];
let inputArr2 = [-12, 34, -124, -123];
console.log(nonAdjacentSubsets(inputArr));
console.log(maxSubsetSum(inputArr));
console.log(maxSubsetSum2(inputArr2));
