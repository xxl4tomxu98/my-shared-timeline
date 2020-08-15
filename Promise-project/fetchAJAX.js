
const fetch = require('node-fetch');
// fetch("https://jservice.xyz/api/games")
//   .then(function(res) {
//     console.log("response: ", res);
//     return res.json();
//   })
//   .then(function(data) {
//     console.log("data:", data);
//   });



//   fetch("https://jservice.xyz/api/categories", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "ACTORS & THEIR GOOD FILMS"
//   })
// })
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });


  fetch("https://jservice.xyz/api/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "ACTORS & THEIR FILMS"
  })
})
  .then(function(res) {
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
