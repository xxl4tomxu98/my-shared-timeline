let moment = require("moment");
let faker = require("faker");
let nodemon = require("nodemon");
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment().format('dddd'));
// console.log(moment().format("MMM Do YY"));

for(let i=0; i<10;i++){
  console.log(faker.name.firstName() + ' '+faker.name.lastName());
}
