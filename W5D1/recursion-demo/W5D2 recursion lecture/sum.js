//  We want to write a function recursiveSum(array) which takes an array
//    of numbers and returns the sum of all elements of the array.
//  This problem must be solved recursively.

// const array = [2, 4, 3, 6];

// 2 + (4 + 3 + 6) === 2 + (4 + (3 + 6)) === 2 + (4 + (3 + (6)))

// Repeating pattern
//  Adding elements in the array

// Where does the pattern break?
// When we're at the last element















// Base Case
// when arr.length === 1

// Recursive Case
// when arr.length > 1

// Recrusive Step
// recursiveSum(arr.slice(1))






function recursiveSum(array) {
    if(array.length === 1){
        return array[0];
    }

    return array[0] + recursiveSum(array.slice(1));
}

const array = [2, 4, 3, 6];

recursiveSum(array);


// recursiveSum(array) ;   // 1st frame,   array = [2, 4, 3, 6],   newArray = [4, 3, 6]
// recursiveSum(array);   // 2nd frame,   array = [4, 3, 6],    newArray = [3, 6]
// recursiveSum(array);   // 3rd frame,   array = [3, 6],     newArray = [6]
// recursiveSum(array);   // 4th frame,   array = [6],      returns 6,    popped off the stack
// 3rd frame,     sum= 3 + 6 = 9,    returns 9,     popped off the stack
// 2nd frame,     sum= 4 + 9,    returns 13,     popped off the stack
// 1st frame,     sum= 2 + 13,    returns 15,     popped off the stack
// Final return value:


console.log(recursiveSum(array));