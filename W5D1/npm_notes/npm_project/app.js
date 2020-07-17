// Run the code below in your terminal before running this!
// npm install

const faker = require("faker");
const fs = require('fs');

const newName = faker.name.firstName();
const formattedName = `<h1>${newName}</h1>`

fs.appendFile('./index.html', formattedName, (err) => {
  if (err) {
    console.log(err);
  }
});