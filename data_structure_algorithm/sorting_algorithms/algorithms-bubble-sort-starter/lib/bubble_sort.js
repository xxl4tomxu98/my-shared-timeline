function swap(array, idx1, idx2) {
                              // save a copy of the first value
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];  // overwrite the first value with the second value
                              // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  // n := length(array)
  let n = array.length;
  // repeat
  //  swapped = false
  let swapped = true;
  while(swapped){
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (array[i-1] > array[i]) {
        swap(array, i-1, i);
        swapped = true;
      }
    }
  }

  return array;
  //  for i := 1 to n - 1 inclusive do
  //
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  //
  //     end if
  //   end for
  // until not swapped
}

let array = [12, -45, 98, 120, -34, 324, 560];
console.log(bubbleSort(array));

module.exports = {
  bubbleSort,
  swap
};
