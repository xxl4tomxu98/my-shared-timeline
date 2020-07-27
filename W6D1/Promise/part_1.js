// VIDEO 1


// // #1 - PROBLEM

// function grindTheBeans() {
//   setTimeout(() => {
//     console.log('done grinding the coffee beans');
//   }, 1000)
// }

// function heatTheWater() {
//   setTimeout(() => {
//     console.log('done heating the water');
//   }, 500)
// }

// function addBeansToWater() {
//   setTimeout(() => {
//     console.log('done adding beans to water');
//   }, 1000)
// }

// function heatTheBeans() {
//   setTimeout(() => {
//     console.log('done heating the beans');
//   }, 800)
// }


// #2

// grindTheBeans();
// heatTheWater();
// addBeansToWater();
// heatTheBeans();




// // #3 - CALLBACK SOLUTION


// function grindTheBeans(nextTask) {
//   setTimeout(() => {
//     console.log('done grinding the coffee beans');
//     nextTask();
//   }, 1000)
// }

// function heatTheWater(nextTask) {
//   setTimeout(() => {
//     console.log('done heating the water');
//     nextTask();
//   }, 500)
// }

// function addBeansToWater(nextTask) {
//   setTimeout(() => {
//     console.log('done adding beans to water');
//     nextTask();
//   }, 1000)
// }

// function heatTheBeans(nextTask) {
//   setTimeout(() => {
//     console.log('done heating the beans');
//     nextTask();
//   }, 800)
// }



// // #4 - CALLBACK ISSUE

// grindTheBeans(() => {
//   heatTheWater(() => {
//     addBeansToWater(() => {
//       heatTheBeans(() => {
//         console.log('coffee is ready!')
//       })
//     })
//   })
// });












// // #5 - PROMISES


// // promise (noun) : assurance that one will do something or
// // that a particular thing will happen


// // #6 - PSEUDO CODE
// let myFirstPromise = new Promise((resolve, reject) => {
//   // do a thing, possibly async, then…

//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });






// // #7 - EXAMPLE: setTimeout used to simulate asynch code


// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     resolve('the promise has been fulfilled');

//     // reject('the promise is rejected')
//   }, 1000)
// });


// // #8
// console.log(myPromise)


// // #9 - THEN

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     //resolve('banana');
//     reject('the promise is rejected')
//   }, 1000)
// });


// // #10

// console.log(myPromise);


// myPromise
//   .then(
//     (result) => { console.log('resolved: ', result) },
//     (reason) => { console.log('rejected: ', reason) }
//   )


// console.log(myPromise);


// let onFulfilled = (result) => { console.log('resolved: ', result) };
// let onRejected = (reason) => { console.log('rejected: ', reason) };

// myPromise
//   .then(onFulfilled, onRejected)


// // #11

// // myPromise
// //   .then(onFulfilled)

// // console.log('hi');


// // #12 - THEN CHAINS

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     resolve('the promise has been fulfilled');
//     // reject('the promise is rejected')
//   }, 1000)
// });


// myPromise
//   .then((result) => {
//     console.log('resolved 1:', result)
//     return 42
//   })
//   .then((result) => {
//     console.log('resolved 2:', result)
//   })





// // #13 - ERROR HANDLING

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     reject(Error('the promise is rejected'))
//   }, 1000)
// });


// let onFulfilled = (result) => { console.log('resolved: ', result) };
// let onRejected = (reason) => { throw Error('something happened') };


// myPromise
// .then(onFulfilled, onRejected)


// // // #14
// // myPromise
// //   .then(onFulfilled, onRejected)
// //   .then((res) => console.log(res), (err) => console.log(err))





// // #15 - CATCH

// myPromise
//   .then(handleSuccess, handleError)


// myPromise
//   .then(onFulfilled, onRejected)
//   .then(onFulfilled, reason => console.log('then #2', reason))
//   .catch(err => console.log(err));















// // #16 - EXAMPLE

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject(Error('the promise is rejected'));
     resolve('resolved woohoo')
  }, 1000)
});

myPromise
  .then(result => {
    console.log("resolved: 1", result);
    return 42;
    // throw Error('error in first then')
  })
  .then(result => {
    console.log("resolved: 2", result);
    // throw Error('error in second then')
  })
  .catch(reason => {
    console.log("rejected: ", reason);
  });
















// #17

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error('the promise is rejected'));
//     // resolve('resolved woohoo')
//   }, 1000)
// });


// console.log(myPromise)

// myPromise
//   .then((result) => {
//     console.log('resolved: ', result);
//     console.log(myPromise); // promise contains value it resolved for
//   })
//   .catch((reason) => {
//     console.log('rejected: ', reason)
//     console.log(myPromise) // tells us it was rejected, and contains err
//   })
