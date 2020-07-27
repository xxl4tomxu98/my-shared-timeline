/**
 * PART ONE!
 * Write two functions that use Promises that you can chain! 
 * The first function, makeAllCaps(), will take in an array of words 
 * and capitalize them, and then the second function, sortWords(), 
 * will sort the words in alphabetical order. 
 * If the array contains anything but strings, it should reject the promise
 * with an error message
*/

// const arrayOfWords = ['cucumber', 'tomatoes', 'avocado']

// makeAllCaps(arrayOfWords)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch(error => console.log(error))

// Expected output: ['AVOCADO', 'CUCUMBER', 'TOMATOES']

// const complicatedArray = ['cucumber', 44, true]
// makeAllCaps(complicatedArray)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch(error => console.error(error))

// Expected output: error

/** 
 * PART TWO!
 * Create a function called sortedCaps that accepts an array 
 * and returns the sorted, all caps version of the array
 * This function must call both makeAllCaps and complicatedArray
 * and must use ASYNC / AWAIT
*/

const makeAllCaps = function(arr){
    return new Promise((resolve, reject) => {
        let upperCaseArr = arr.map(elem => {
            if (typeof elem !== 'string'){
                reject("Invalid input");
            } else {
                return elem.toUpperCase();
            }
        })
        return resolve(upperCaseArr);
    })
}
const sortWords = function(arr){
    return new Promise((resolve, reject)=>{
        arr.forEach(elem => {
            if (typeof elem !== 'string'){
                reject("Invalid input");
            }
        })
        return resolve(arr.sort());
    })
}
const complicatedArray = ['cucumber', 4, 'blossom']
makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.error(error))

const arrayOfWords = ['cucumber', 'tomatoes', 'avocado']

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))

async function sortedCaps(arr){
    const caps = await makeAllCaps(arr);
    const sorted = await sortWords(caps);
    console.log(sorted);
}
const anotherArray = ['cucumber', 'tomatoes', 'avocado', 'carrots']
sortedCaps(anotherArray)
