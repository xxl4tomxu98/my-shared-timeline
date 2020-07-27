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

function makeAllCaps(arr){
  return new Promise((resolve, reject) => {
    //if (arr.some(ele=> !(ele instanceof String))){
    if(arr.some(ele=> typeof ele !== "string")){
      reject("Error: There is element not a string!");
    } else {
      resolve(arr.map(ele=>ele.toUpperCase()));
    }
  });
}


function sortWords(arr){
  return new Promise((resolve, reject) => {
    if(arr.some(ele=> typeof ele !== "string")){
      reject("Error: There is element not a string!");
    } else {
      resolve(arr.sort());
    }
  })
}

const arrayOfWords = ['cucumber', 'tomatoes', 'avocado']

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))


const complicatedArray = ['cucumber', 44, true]
makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.error(error))

/**
 * PART TWO!
 * Create a function called sortedCaps that accepts an array
 * and returns the sorted, all caps version of the array
 * This function must call both makeAllCaps and sortWords
 * and must use ASYNC / AWAIT
*/

async function sortedCaps(arr){
  try {
    let capArr = await makeAllCaps(arr);
    console.log(await sortWords(capArr));
 } catch(err){
    console.error(err);
 }
}

sortedCaps(arrayOfWords);
sortedCaps(complicatedArray);
