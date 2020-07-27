/***********************************************************************
Write a recursive function called `sum` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sum([1, 2, 3]); // => 6
sum([0, 1, -3]); // => -2
sum([1, 2, 3, 4, 5]); //=> 15
***********************************************************************/

function sum(arr) {
    if(arr.length === 1){
        return arr[0];
    }
    return arr[0] + sum(arr.slice(1));
}

const sum2 = arr => arr.length === 0 ? arr[0] : arr[0] + sum2(arr.slice(1));


console.log(sum([1, 2, 3])); // => 6
console.log(sum([0, 1, -3])); // => -2
console.log(sum([1, 2, 3, 4, 5])); //=> 15
console.log(sum2([1, 2, 3, 4, 5, 12, 23, 123])); //=> 173
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sum;
