function merge(array1, array2) {
  // var result as array
  let result = [];
  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while
  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] > array2[0]) {
      result.push(array2[0]);
      array2.shift();
    } else {
      result.push(array1[0]);
      array1.shift();
    }
  }
  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while
  while (array1.length !== 0) {
    result.push(array1[0]);
    array1.shift();
  }
  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while
  while (array2.length !== 0) {
    result.push(array2[0]);
    array2.shift();
  }
  // return result
  return result;
}

function merge1(array1, array2) {
  let merged = [];
  // if array1 is nonempty, take its the first element as ele1
  // otherwise array1 is empty, so take Infinity as ele1
  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;
    //b/c the above infinity, we can still compare arr ele
    //even when there is really no ele in a array
    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}
//Array.shift() or unshift() has a time complexity of O(n). If thats the case then wouldnt //the way that merge sort was implemented be a higher time complexity then O(nLog(n))? In
//the worst case we would need to go through every array to merge O(n) and when we do that //we also do  array.shift() another O(n) operation ... making it N^2Log(n)
//better merge routine that don't do unshift()and shift().
function merge2(leftHalf, rightHalf){
  const sortedArray = new Array(leftHalf.length, rightHalf.length);
  let k=0;
  let i=0;
  let j=0;
  while(i<leftHalf.length && j< rightHalf.length){
    if(leftHalf[i] <= rightHalf[j]){
      sortedArray[k++] = leftHalf[i++];
    } else {
      sortedArray[k++] = rightHalf[j++];
    }
  }

  while(i< leftHalf.length){
    sortedArray[k++] = leftHalf[i++];
  }

  while (j<rightHalf.length) {
    sortedArray[k++] = rightHalf[j++];
  }
  return sortedArray;
}


function mergeSort(array) {
  let n = array.length;
  // if ( n == 1 ) return a
  //recursive function base case arr sorted when n=0 or 1
  if (n <= 1) return array;
  // /* Split the array into two */
  // var l1 as array = a[0] ... a[n/2-1]
  // var l2 as array = a[n/2] ... a[n]
  let mid = Math.floor(n / 2);
  console.log(mid);
  let elOne = array.slice(0, mid);
  let elTwo = array.slice(mid);
  // l2 = mergesort( l2 )
  let l1 = mergeSort(elOne);
  let l2 = mergeSort(elTwo);
  // return merge( l1, l2 )
  return merge2(l1, l2);
}

let array = [12, -45, 98, 120, -34, 324, 560];
console.log(mergeSort(array));


module.exports = {
  merge,
  mergeSort
};
