function quickSort(array) {
  let n = array.length;
  // if the length of the array is 0 or 1, return the array
  if (n === 0 || n === 1) {
    return array;
  }
  // set the pivot to the first element of the array
  // remove the first element of the array
  let pivot = array.shift();
  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right
  // let left = [];
  // let right = [];
  // for (let i = 0; i < array.length; i++) {
  //   let value = array[i];
  //   if (value < pivot) {
  //     left.push(value);
  //   } else {
  //     right.push(value)
  //   }
  // }
  let [left, right] = partition(array, pivot);
  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  // return the concatenation of leftSorted, the pivot value, and rightSorted
  //return leftSorted.concat([pivot]).concat(rightSorted);
  return [...leftSorted, pivot, ...rightSorted];
}

function partition(array, pivot) {
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);
  return [ left, right ];
}


let array = [12, -45, 98, 120, -34, 324, 560];
console.log(quickSort(array));


module.exports = {
  quickSort
};
