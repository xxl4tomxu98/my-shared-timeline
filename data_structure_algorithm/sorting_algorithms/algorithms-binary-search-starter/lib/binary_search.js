function binarySearch(list, target) {
  // parameter list: a list of sorted value
  // parameter target: the value to search for
  let n = list.length;
  // if the list has zero length, then return false
  if (n === 0) {
    return false;
  }
  // determine the slice point:
  // if the list has an even number of elements,
  //   the slice point is the number of elements
  //   divided by two
  // if the list has an odd number of elements,
  //   the slice point is the number of elements
  //   minus one divided by two
  // let mid;
  // if (n % 2 === 0) {
  //   mid = n/2;
  // } else {
  //   mid = (n-1)/2;
  // }
  // create an list of the elements from 0 to the
  //   slice point, not including the slice point,
  //   which is known as the "left half"
  // create an list of the elements from the
  //   slice point to the end of the list which is
  //   known as the "right half"
  let mid = Math.floor(n / 2);
  let leftHalf = list.slice(0, mid);
  //It's worth pointing out that the left and right halves
  //do not contain the middle element we chose. this way problem reduces
  //every time we recurse.
  let rightHalf = list.slice(mid + 1);
  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "left half"
  //   and the target
  if (target < list[mid]) {
    return binarySearch(leftHalf, target);
  }
  // if the target is greater than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "right half"
  //   and the target
  else if (target > list[mid]) {
    return binarySearch(rightHalf, target);
  } else {
    //target is the list[mid] found!
    return true;
  }

  // if neither of those is true, return true
}


//this is non destructive binary search no separate arr created
//the array we consider goes from list.slice(low, high+1)
function binarySearchIndex(list, target, low=0, high=list.length-1) {

  // parameter list: a list of sorted value
  // parameter target: the value to search for
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search

  // if low is equal to high, then return -1 to indicate
  //   that the value was not found
  if (low === high) {
    return -1;
  }
  // determine the slice point:
  //   if the list between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the list between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two
  let mid;
  if ((high - low) % 2 === 0) {
    mid = low + (high - low) / 2;
  } else {
    mid = low + (high - low - 1) / 2;
  }
  //let mid = Math.floor((low + high) / 2);

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search index of the array,
  //   the target, low, and the slice point
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search index of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point
  if (target < list[mid]) {
    return binarySearchIndex(list, target, low, mid);
  } else if (target > list[mid]) {
    return binarySearchIndex(list, target, mid+1, high);
  } else {
    return mid;
  }
}


let array = [-1200, -145, -98, -12, 34, 324, 560, 1200];
console.log(binarySearch(array, -12));
console.log(binarySearchIndex(array, -12));



module.exports = {
  binarySearch,
  binarySearchIndex
};
