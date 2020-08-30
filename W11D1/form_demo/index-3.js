const express = require('express');
// const cookieParser = require("cookie-parser");

const app = express();

// app.use(cookieParser()); // Adding cookieParser() as application-wide middleware

// define custom middleware here:
const logTime = (req, res, next) => {
	console.log('Current time: ', new Date().toISOString());
	next();
};

// Tell app to use this middleware everywhere:
app.use(logTime);

const passOnMessage = (req, res, next) => {
	console.log('Passing on a message!');
	req.passedMessage = 'Hello from passOnMessage!';
	next();
};

app.get('/', logTime, passOnMessage, (req, res) => {
// app.get('/', logTime, passOnMessage, (req, res) => {
// app.get('/', [logTime, passOnMessage], (req, res) => {
	console.log('Passed Message: ', req.passedMessage);
	res.send('Hello World!');
});

app.get('/bye', (req, res) => {
	res.send('Bye World.');
});

// Define a port and start listening for connections.
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
