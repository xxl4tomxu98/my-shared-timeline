function insertionSort(list) {
// for i from 1 to length(list) inclusive do:
  if(list.length===1) return list;
  // the `i` loop will iterate through every element of the array
  // we begin at i = 1, because we can consider the first element of the array as a
  // trivially sorted region of only one element
  // insertion sort allows us to insert new elements anywhere within the sorted region
  for(let i=1; i<list.length; i++){
    // grab the first element of the unsorted region
    let valueToInsert = list[i];
    let holePosition = i;
    // the while loop will iterate left through the sorted region,
    // looking for a legal spot to insert currElement
    while(holePosition>0 &&list[holePosition-1]>valueToInsert){
      // keep moving left while valueToInsert is less than the element
      // the line below will move the found larger element to the right,
      // leaving a gap to potentially insert valueToInsert
      list[holePosition] = list[holePosition-1];
      holePosition -= 1;
    }
    //after holePosition shifted insert valueToInsert
    list[holePosition] = valueToInsert;
  }
  return list;
//   /* select value to be inserted */
//   valueToInsert = list[i]
//   holePosition = i

//   /* locate hole position for the element to be inserted */

//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
//     list[holePosition] = list[holePosition-1]
//     holePosition = holePosition -1
//   end while

//   /* insert the number at hole position */
//   list[holePosition] = valueToInsert

// end for
}

let array = [12, -45, 98, 120, -34, 324, 560];
console.log(insertionSort(array));


module.exports = {
  insertionSort
};
