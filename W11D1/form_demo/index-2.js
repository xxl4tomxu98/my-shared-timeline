const express = require('express');
const cookieParser = require('cookie-parser');

const csrf = require('csurf'); // csfr protection

// Create the Express app.
const app = express();

// Set the pug view engine.
app.set('view engine', 'pug');
app.use(cookieParser());

// Set up CSFR protection
app.use(express.urlencoded({ extended: true }));
const csrfProtection = csrf({ cookie: true });

const validateGuest = (req, res, next) => {
	const { fullname, email, numGuests } = req.body;
	const numGuestsNum = parseInt(numGuests, 10);
	const errors = [];

	if (!fullname) {
		errors.push('Please fill out the full name field.');
	}

	if (!email) {
		errors.push('Please fill out the email field.');
	}

	if (!numGuests || numGuestsNum < 1) {
		errors.push('Please fill out a valid number for number of guests.');
	}
	// debugger;
	req.errors = errors;
	req.body.numGuests = numGuestsNum;
	next();
};

const guests = [];

// Define a route.
app.get('/', (req, res) => {
	res.render('index', { title: 'Guest List', guests });
});

app.get('/guest', csrfProtection, (req, res) => {
	res.render('guest-form', { title: 'Guest Form', csrfToken: req.csrfToken() });
});

app.post('/guest-form', csrfProtection, validateGuest, (req, res) => {
	const { fullname, email, numGuests } = req.body;
	if (req.errors.length > 0) {
		res.render('guest-form', {
			title: 'Guest Form',
			errors: req.errors,
			email,
			fullname,
			numGuests
		});
		return;
	}

	const guest = {
		fullname,
		email,
		numGuests
	};
	guests.push(guest);
	res.redirect('/');
});



// Define a port and start listening for connections.
const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}...`));
