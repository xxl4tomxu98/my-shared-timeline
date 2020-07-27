// VIDEO 2 

const { url } = require("inspector");



// #1 

// function grindTheBeans() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("done grinding the coffee beans");
//       resolve();
//     }, 1000)
//   })
// }

// function heatTheWater() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("done heating the water");
//       resolve();
//     }, 2000)
//   })
// }

// // fetch(some url, some values)


// function addBeansToWater() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("done adding to the water");
//       resolve();
//     },1000)
//   })
// }


// // #2

// grindTheBeans()
//   .then(() => console.log('after grinding the beans'))
//   .then(heatTheWater)
//   .then(() => console.log('after heating water'))
//   .then(addBeansToWater)
//   .then(() => console.log('enjoy'))
//   .catch(err => console.log(err))


// callback solution

// grindTheBeans(() => {
//   heatTheWater(() => {
//     addBeansToWater(() => {
//       heatTheBeans(() => {
//         console.log('coffee is ready!')
//       })
//     })
//   })
// });













// Promise.all()


function grindTheBeans() {

  console.log("prep for grinding the beans");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done grinding the beans");

      resolve('ground beans')
      // reject('unground beans :(')
    }, 2000);
  });
};

function heatTheWater() {
  console.log("prep for heating the water");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done heating the water");

      resolve('heated water')
      // reject('the water is cold :(')
    }, 3000);
  });
};



let promises = [grindTheBeans(), heatTheWater()]


Promise.all(promises)
  .then((results) => {
    console.log(results);
    console.log('coffee is done, time to chill')
  })
  .catch((reason) => {
    console.log(reason)
  })