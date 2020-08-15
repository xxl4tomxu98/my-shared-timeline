const express = require("express");
const faker = require("faker");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// sets up bodyParser middleware
// process chunks of data in HTTP req 
// constructs JSON obj (req.body) that can be accessed in routes
app.use(bodyParser.json());

// sets up static middlewaree
// allows server to serve any static assets in public dir
// static assets are images, html, docs, css
app.use(express.static("public"));

// NOTE #1
const port = 3000;


// NOTE #2
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});


// NOTE #3
app.get("/name", (req, res) => {
  const randomName = faker.name.findName();
  res.json({ name: randomName }); // { name: 'pancake' }

  // sends err res with status 422 and message
  // res.status(422).send({ message: "Error occurred!"})
});




const myNames = []

app.post("/name/new", (req, res) => {
	const newName = req.body.name; // 'pancake'
	myNames.push(newName)
  res.json({ names: myNames }); // { names: ['pancake'] }
});

// listening for network req on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


