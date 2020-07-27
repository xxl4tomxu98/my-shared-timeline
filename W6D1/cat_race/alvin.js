function doDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('dishes done!');
      // reject('broken dishes! :(');
    }, 1000)
  })
}

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('dog walked!');
      reject('the dog ran away! :(');
    }, 1500)
  })
}



// ------------------------------------------------------------

// function doChores() {
//   doDishes().then(result => console.log(result));
//   walkTheDog().then(result => console.log(result))
//   .catch(reason=>console.error("Badness occurred, ", reason));
// }

// doChores();


// ------------------------------

// async function doChores() {
//   const result1 = await doDishes();
//   console.log(result1);
//   try{
//     const result2 = await walkTheDog();
//     console.log(result2);
//   } catch(err){
//     console.error(err);
//   }

// }

// doChores();



// ------------------------------------------------------------

function doChores() {
  let items = [];
  doDishes()
    .then(res => items.push(res))
    .then(walkTheDog().catch(reason => console.error(reason)))
    .then(res => {
      items.push(res);
      console.log(items);
    });
}

doChores();

// ------------------------------

// async function doChores() {
//   let items = [];
//   items.push(await doDishes());
//   items.push(await walkTheDog());
//   console.log(items);
// }

// doChores();

// ------------

// const promise = doChores()

// console.log(doChores)
// console.log(promise)

// setTimeout(() => {
//   console.log(promise)
// }, 1000)

// setTimeout(() => {
//   console.log(promise)
// }, 4000)



// ------------------------------------------------------------

// function doChores() {
//   walkTheDog()
//     .then(result => console.log(result))
//     .catch(reason => console.log(reason));
// }

// doChores();

// ------------------------------------------------------------

// async function doChores() {
//   console.log(await walkTheDog());
// }

// doChores();

// -------------------------------

// async function doChores() {
//   try {
//     console.log(await walkTheDog());
//   } catch (error) {
//     console.log('ERROR:', error);
//   }
// }

// doChores();





//




// ------------------------------------------------------------

// const fetch = require('node-fetch')

// fetch(movieUrl)
//   .then(res => res.json())
//   .then(json => console.log(json.Plot));

// ---------------

// async function fetchMatrix() {
//   const MOVIE_API_KEY = null;
//   const movieUrl = `http://www.ombapi.com/?t=the+matrix&apikey=${MOVIE_API_KEY}`;
//   const res = await fetch(movieUrl);
//   const json = await res.json();
//   console.log(json.Plot);
// }

// fetchMatrix();
