## Authentication Learning Objectives
1. Define the term `authentication`
- `Authentication` is concerned with verifying someone is who they say they are. We generally provide a username/email and password to the server.
- This is different from **auhorization**, which is determining if a user is allowed to perform a certain action.

2. Describe the difference between `asymmetric` and `symmetric` cryptographic algorithms
- `Symmetric algorithms` use one key for both encoding and decoding.
- `Asymmetric algorithms` use one key for encoding and another key for decoding. The key used for decoding is kept private so that only the issuer is able to decode.

3. Identify "**strong**" vs. "**broken**" hash functions
- "**Broken**" hash functions have been cracked. The original input to these functions can be determined by the hashed values produced.
  - Examples: `md4, md5, sha1`

- "**Strong**" hash functions have not been cracked. Given a hashed value, we cannot (at this point) determine what the original input was without some brute force, trial and error calculations.
  - Examples: `sha256`, `sha512`

- `Slow algorithms` hash inputs sequentially many times. They use a hash function to hash an input value, then take the result and hash it again, repeating this process thousands of times just for one input. These hashing algorithms are computationally expensive and difficult to crack even with large computing power, so they are recommended for use in hashing passwords that we want to store in our database.
  - Examples: `PBKDF2`, `bcrypt`, `Argon2`

4. Implement `session-based authentication` in an Express application
- We can use the `express-session` package to create session middleware.
- The session will create a cookie that is passed back and forth between the server and client.
- We can set values on our session to indicate that we have been authenticated. On subsequent requests, when we read the cookie we see that we were logged in previously and can see who the user is.
- With each request that comes in, we check if the authorization key has been created on the session previously. If it has been, we find the user's information and add it in to the local response variables in order to be able to use this information in subsequent middleware or routes.
```js
// app.js
// We use the express-session library in order to set up session middleware
const session = require('express-session');
const cookieParser = require('cookie-parser');

const { sessionSecret } = require('./config');
const { restoreUser } = require('./auth');

// We pass in the same secret to our cookieParser as we do to our session middleware
app.use(cookieParser(sessionSecret));
// Our session middleware sets up a name in order to easily identify the cookie that it creates
app.use(session({
  name: 'amusement-park-tracker.sid',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));
// We use our restoreUser middleware (defined in our auth file below) in order to add the whole user instance to our response's locals key, as well as a flag to indicate we have been authenticated. We can use these values in subsequent routes or middleware functions in order to restrict access, provide customized information, etc.
app.use(restoreUser);
```

```js
// auth.js
const db = require('./db/models');

// We signify that a user is logged in by creating an auth key on the request's session.
// In this implementation, we are adding the userId in order to signify who is logged in.
const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

// Removing the auth key on our session signifies that we are no longer logged in
const logoutUser = (req, res) => {
  delete req.session.auth;
};

// We create a middleware function that can be added to routes that we want to restrict to logged in users
const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/user/login');
  }
  return next();
};

const restoreUser = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.
  console.log(req.session);

  if (req.session.auth) {
    // If we had an auth key, that means we are logged in in. We pull the userId out of auth, then find the user record associated with it.
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        // If we successfully found the user, we indicate that we are authenticated and add the user information to the response's locals key for use in other middleware/routes
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      // If we ran into an error finding our user, we indicate we are not authenticated and invoke our error handlers
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    // If we didn't have an auth key at all, we indicate we are not authenticated and continue to the next middleware (or routes)
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
```
- In a production environment, we would generally store our session information in a database instead of in local memory (the default `MemoryStore`). In order for us to do so, we can use another package, such as `connect-pg-simple`. We have to make sure we are providing environment variables to connect to our database as well as providing a `store` key on our session options to indicate that we are using something other than the default `MemoryStore`
```js
// ./app.js

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
```

5. Implement a strong hash function to securely store passwords
- In our express applications, using the `bcryptjs` package is an easy way to hash our passwords and compare passwords for logging a user in.
```js
const bcrypt = require('bcryptjs');

async function getHash(password, saltRounds) {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log(hash);
  return hash;
}

async function isPassword(password, hash) {
  const isPassword = await bcrypt.compare(password, hash);
  console.log(isPassword);
  return isPassword;
};
```

6. Describe and use the different security options for cookies
- When setting up our session, we can provide a `cookie` key, pointing to an object that specifies options for how our session cookie is set up.
  - httpOnly: prevents JavaScript on the page from accessing the cookie
  - maxAge: sets an expiration for our cookie, which would require the user to re-authenticate
  - path: sets where our cookie is valid. We can make cookies for more specific paths on our app, but the root (`/`) is most common, available throughout the app
  - secure: requires https to be used
  - domain: if not present, the current domain is used by the cookie, but we can also specify a different domain by including this key
  - expires: where maxAge will calculate an expiration time in the future, expires specifies a specific time to expire at
```js
app.use(
	session({
		store: new (store(session))(),
		secret: 'a5d63fc5-17a5-459c-b3ba-6d81792158fc',
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			maxAge: 60000,
			path: '/',
			secure: true
		}
	})
```