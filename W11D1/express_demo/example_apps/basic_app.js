// imports express module
const express = require("express");



// create the express application object
// can call variety of methods handle req/res
const app = express();

//define a route
//app.METHOD(PATH, HANDLER)

// Define Route #1
app.get('/', (req, res) => {

  console.log(`Request method: ${req.method}`);
  console.log(`Request method: ${req.path}`);

  res.send('Route #1')
});


// #1 and #2 are same path and same method
// Define Route #2 The express stops looking
// when it found Route #1 so Route#2 won't show
app.get('/', (req, res) => {

  res.send('Route #2')
});



// Define Route #3
app.get('/search/:wildcard', (req, res) => {

	let wildcardValue = req.params.wildcard;
	console.log(`Wildcard value: ${wildcardValue}`)

  res.send(`Wildcard route: ${wildcardValue}`)
});




// define a port and start listening for connections
const port = 8080;

// cb called when listening for http connections from client
app.listen(port, () => console.log(`Listening on port ${port}...`));
