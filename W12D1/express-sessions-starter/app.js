
const express = require('express');
const session = require('express-session');
const store = require('connect-pg-simple');

const app = express();

app.set('view engine', 'pug');
app.use(session({
  store: new (store(session))(),
  secret: 'a5d63fc5-17a5-459c-b3ba-6d81792158fc',
  resave: false,
  saveUninitialized: false,
}));


app.use((req, res, next) => {
  // Attempt to get the `history` array from session.
  // If it's not initialized, then create an array
  // and assigned it back to session.
  let { history } = req.session;
  if (!history) {
    history = [];
    req.session.history = history;
  }

  // Construct the full URL for the current request.
  // Note: Using `req.get('host')` to get the hostname also
  // gives you the port number.
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  // Add the URL to the beginning of the array.
  history.unshift(url);

  // Note: We don't need to update the `session.history` property
  // with the updated array because arrays are passed by reference.
  // when we get a reference to the array in the above code
  // `let { history } = req.session;` and modify the array by
  // calling `history.unshift(url);` we're modifying the original
  // array that's stored in session!

  next();
})

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', history: req.session.history});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', history: req.session.history });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', history: req.session.history });
});

const port = 8080;

app.listen(port, () => console.log(`Listening for connections on port ${port}...`));
