
// ----------------------------------------------------------
//                      Guess What Algo
// ----------------------------------------------------------


// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

// HINTS:

// divide and conquer
// need a helper function that solves merging elements of two sorted arrays into a single sorted array

function guessWhatAlgo(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);

    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = guessWhatAlgo(leftHalf);
    let sortedRight = guessWhatAlgo(rightHalf);

    return helperguessWhatAlgo(sortedLeft, sortedRight);
}
// ANSWER: Merge sort

// if there is only one element in the list, it is already sorted.return that array.
// otherwise, divide the list recursively into two halves until it can no more be divided.
// merge the smaller lists into new list in sorted order.

// TIME COMPLEXITY: O(nlogn)

// SPACE COMPLEXITY:O(n)










// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

// HINT:

// works by performing multiple passes to move elements closer to their final positions


function guessWhatAlgo(array) {
    let swapped = true;
    while (swapped) { // O(n)
        swapped = false;  

        for (let i = 0; i < array.length; i++) { //O(n)

            if (array[i] > array[i + 1]) {

                swap(array, i, i + 1);

                swapped = true;
            }
        }
    }

    return array;
}

// ANSWER: Bubble sort

// TIME COMPLEXITY: O(n * n === n^2)

// SPACE COMPLEXITY: O(1)


















// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

// HINT:

function guessWhatAlgo(array) { 
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot); 
    let right = array.filter(el => el >= pivot);

    let leftSorted = guessWhatAlgo(left); 
    let rightSorted = guessWhatAlgo(right);

    return [...leftSorted, pivot, ...rightSorted]; 
}
// ANSWER: Quick sort

// TIME COMPLEXITY: worst case: O(n^2) best case: O(nlogn)

// SPACE COMPLEXITY:O(n)



















// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

function guessWhatAlgo(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currElement;
    }
    return arr;
}
// ANSWER: Insertion sort

// TIME COMPLEXITY: O(n^2)

// SPACE COMPLEXITY:O(1)





























// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

function guessWhatAlgo(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);

    if (target < array[midIdx]) {
        let leftHalf = array.slice(0, midIdx);

        return guessWhatAlgo(leftHalf, target);
    } else if (target > array[midIdx]) {
        let rightHalf = array.slice(midIdx + 1);

        return guessWhatAlgo(rightHalf, target);
    } else {
        return true;
    }
}
// ANSWER: Binary Search

// TIME COMPLEXITY: O(logn)

// SPACE COMPLEXITY:O(n)




























// ----------------------------------------------------------
//                      ?????????
// ----------------------------------------------------------

function guessWhatAlgo(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }
    return arr;
}
// ANSWER: Selection sort

// TIME COMPLEXITY: O(n^2)

// SPACE COMPLEXITY:O(1)