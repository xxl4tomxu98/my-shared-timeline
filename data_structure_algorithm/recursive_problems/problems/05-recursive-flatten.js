/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // => []
flatten([1, 2]); // => [1, 2]
flatten([1, [2, [3]]]); // => [1, 2, 3]
***********************************************************************/

function flatten1(arr) {
    let newArr = [];
    arr.forEach(el =>{
      if(Array.isArray(el)){
        newArr.push(...flatten1(el));
      } else {
        newArr.push(el);
      }
    });
    return newArr;
}

function flatten4(arr){
  if(arr.length===0){
    return [];
  } else if(!Array.isArray(arr[0])){
    return [arr[0], ...flatten4(arr.slice(1))];
  } else {
    return [...flatten4(arr[0]), ...flatten4(arr.slice(1))];
  }
}

//recursive oneliner
const flatten3 = (array, [head, ...tail] = array) => Array.isArray(array) && array.length === 0 ? [] : !Array.isArray(head) ? [head, ...flatten3(tail)] : [...flatten3(head), ...flatten3(tail)];

//nonrecursive oneliner
let flatten2 = arr => [...arr.toString().split(",").map(Number)];


//recrusive with memoization
function flatten(arr, memo={}){
  if(arr.length===0){
    return [];
  }
  if(arr.length in memo) return memo[arr.length];
  if(!Array.isArray(arr[0])){
    memo[arr.length] = [arr[0], ...flatten(arr.slice(1), memo)];
  } else {
    memo[arr.length] = [...flatten(arr[0]), ...flatten(arr.slice(1), memo)];
  }
  return memo[arr.length];
}




console.log(flatten([])); // => []
console.log(flatten([1, 2])); // => [1, 2]
console.log(flatten([1, [2, [3]]])); // => [1, 2, 3]
console.log(flatten2([1, [2, [3]], [5,[6,7],[8,9,[10,[11,12]]]]]));
console.log(flatten3([1, [2, [3]], [5,[6,7],[8,9,[10,[11,12]]]]]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
