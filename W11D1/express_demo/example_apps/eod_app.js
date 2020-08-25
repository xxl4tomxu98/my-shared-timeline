const express = require("express");

// import routes module
const routes = require("./routes");

// create the express app
const app = express();


app.set("view engine", "pug");


let loggedIn = true;

app.get("/", (req, res) => {
	let items = ["Item1", "Item2", "Item3"];

	let data = { items: items, loggedIn: loggedIn, name: 'Alissa' };
	res.render("eod_layout", data);
});


app.get("/login", (req, res) => {
	loggedIn = true;
	res.redirect('/')
});


app.get("/logout", (req, res) => {
	loggedIn = false;
	res.redirect('/')
});


app.get("/hello", (req, res) => {
	res.send('Hello there!!!!')
});




// define a port and start listening for connections
const port = 8080;

// cb called when listens for http connections from client
app.listen(port, () => console.log(`Listening on port ${port}...`));
