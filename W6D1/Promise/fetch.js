const fetch = require('node-fetch')

// what is fetch? ---> function or Object
console.log(fetch)

// what does fetch return? ---> Promise
console.log(fetch('https://api.github.com/users/github'))



fetch("https://api.github.com/users/github")
  .then(res => console.log(res))
  .then(res => res.json())
  .then(res => console.log(res.json()))
  .then(jsonRes => console.log(jsonRes))
  .catch(reason => {
     console.log("rejected because", reason);
  });




// api keys

// http://www.omdbapi.com/?apikey=afab3d6d&t=harry+potter

fetch('http://www.omdbapi.com/?apikey=afab3d6d&t=harry+potter')
  .then(res => res.json())
  .then(res => console.log(res))
  .then(res => console.log(res.Title))






let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('the promise has fulfilled');
    // reject('the promise is rejected')
  })
})

console.log(myPromise)

myPromise
  .then((result) => {
    console.log('resolve: ', result)
    console.log(myPromise)
  })
  .catch((reason) => {
    console.log('reason :', reason);
    console.log(myPromise)
  })
