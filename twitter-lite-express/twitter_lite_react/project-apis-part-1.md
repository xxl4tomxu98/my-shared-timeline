
# Twitter Lite

Today you'll begin building a lightweight Twitter API using Express, Sequelize,
and Postbird! There will be two parts to this project: creating an API and
creating a client-side application.

When you have completed the first part of the project, your application should
have the following features:

1. A default "/" GET route.
2. A "/tweets" GET route to fetch an index of tweets.
3. A "/tweets" POST route to create tweets.
4. A "/tweets/:id" PUT route to update tweets.
5. A "/tweets/:id" DELETE route to delete tweets.
6. A backend API that connects to a simple frontend server.
7. A Users model.

## Phase 0: Initialize project

Begin by cloning the project skeleton:

```sh
git clone https://github.com/appacademy-starters/express-sequelize-starter.git
```

Install your packages with `npm install`.

### Initializing Sequelize

Just like in the To-Do list demo project, the Sequelize CLI is already
configured to know where your database configuration is located and where to
generate the `models`, `seeders`, and `migrations` folders. The project skeleton
has already taken care of configuration by including complete `.sequelizerc`,
`./config/index.js`, and `./config/database.js` files.

### Configuring your environment variables

Before you set up your database, remember that the Sequelize CLI still
needs access to your database credentials. Create an `.env` file based off of
the `.env.example` file included in your project skeleton.

### Creating your database

Before initializing the `Tweet` model, you'll need to create a new database.

Take a moment to create a database user and database:

- The login name that you must use is "twitter_lite_app" (make sure to set a
  login password).
- Your user must be granted the CREATEDB privilege so that you can run `npx
  dotenv sequelize-cli db:create`.
- The database name that you must use is "twitter_lite".


## Phase 1: Set up the Tweet model

It's time to generate and migrate your Tweet model with the following commands:

```sh
npx sequelize model:generate --name Tweet --attributes "message:string"
```

In the model and migration files, make sure to configure the tweet `message` to
not be nullable. Each tweet should have a `message` column of type `string` that
has a maximum length of `280` and is not nullable. Then run your migrations:

```sh
npx dotenv sequelize db:migrate
```

After migrating, you should see the `Tweets` table in your Postbird client:

![postbird-migration][postbird-3]

Now generate a seed file by running the following command from the root of your
project:

```sh
npx sequelize seed:generate --name test-data
```

Go ahead and replace the contents of the `./db/seeders/[timestamp]-test-data.js`
with the following code:

```js
"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tweets",
      [
        {
          message: "The Martian was awesome!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: "Has anyone seen Ready Player One?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message:
            "Harry Potter and the Sorcerer's Stone is the best out of all seven HP books :).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tweets", null, {});
  },
};
```

Now run your seed files with the command below:

```sh
npx dotenv sequelize db:seed:all
```

After seeding, you should see the tweets you have created in your Postbird
client:

![postbird-seed][postbird-3]

## Phase 2: Set up test routes

Notice that your skeleton already has a basic Express application set up in
`app.js`. It's time for you to set up the routers for your project.

Create a `routes` module by creating a `routes` directory in the root of your
project. Within your `routes` folder, create an `index.js` file for your default
router and a `tweets.js` file for your tweet routers. In both files, begin by
requiring `express` and creating a `router` with `express.Router()`. Lastly,
make sure you export the routers you just created.

A majority of RESTful APIs serve data in a JSON format. Let's do the same for
this project! To do this, update your `app.js` file to have your application
`use(express.json())`. The `express.json()` middleware is needed to parse
request body content formatted in JSON so that it is available via the
`req.body` property.

Lastly, in order to connect to the routes modules you have just created, import
your `./routes/index` file as the `indexRouter` and import your
`./routes/tweets` file as the `tweetsRouter`. Make sure your application is
using the `/` route with the `indexRouter` as well as the `/tweets` route with
the `tweetsRouter`.

### Creating test routes

Let's get started in the `./routes/index.js` file. Move your GET route for `/`
from `app.js` into your `./routes/index.js` file. Update the route to use
`res.json()` in order to render a JSON response of `message: "test index root"`.

Now you'll add a test route in your `./routes/tweets.js`. Create a route
that handles a GET request to the `/` path. Have your result `send` a JSON
response of `message: "test tweets index"`.

### Testing requests on Postman

Now run `npm start` to start your server and open up Postman to test your GET
requests.

![using-postman][postman-1]

When sending a GET request to `localhost:8080/`, you should see JSON with your
"test index root" message in the body response. When sending a GET request to
`localhost:8080/tweets`, you should see JSON with your "test tweets index"
message in the body response.

Note that if you use your browser to navigate to `localhost:8080/` and
`localhost:8080/tweets`, you'll see the same response as in Postman.

## Phase 3: Set up tweet routes

Now you'll add your Tweet routes in your `./routes/tweets.js`. Begin by
requiring your `db` from your `../db/models` directory:

```js
const db = require("../db/models");
```

Now destructure your `Tweet` model from the `db` you have just imported:

```js
const { Tweet } = db;
```

In this phase, you'll interact with your `Tweet` model by using built-in methods
to set up the basic CRUD functionalities for tweets:
  * `Tweet.findAll()` to fetch all of your database tweets. (Read)
  * `Tweet.findByPk()` to fetch a database tweet based on the `id` from your
    request parameters. (Read)
  * `Tweet.create()` to generate a tweet in your database. (Create)
  * `Tweet.update()` to update a tweet in your database. (Update)
  * `Tweet.destroy()` to delete a tweet from your database. (Delete)

### GET /tweets

It's time to set up a GET `/` route to fetch all of your seeded tweets when
sending a GET request to `localhost:8080/tweets`. Since you'll be awaiting a
database fetch, let's bring back your `asyncHandler` function to help you catch
errors in a DRY way!

As a reminder, your `asyncHandler` takes in a `handler` function to return a
middleware function that invokes the handler function with `req`, `res`, and
`next`. It then chains on a `catch` statement by passing in the `next` function.

Let's begin by updating the `tweets` GET route to `/`. Wrap the route function
with your `asyncHandler` to be able to `await` the database fetch of all your
tweets. Look at the beginning of the Phase 3 instructions to determine which
Tweet model method to use.

Lastly, remember to render the tweets you have fetched from your database in
JSON by using `res.json({ tweets })`.

### GET /tweets/:id

Now you'll set up the GET `/:id(\\d+)` route to read a specific tweet when
sending a GET request to `localhost:8080/tweets/:id`. Parse the `tweetId` from
your `req.params` object and use your `tweetId` to fetch a specific tweet from
the database. 

Note that the `app` module contains the following middleware function to catch
unhandled requests and pass a `404` error to the global error handler:

```js
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});
```

This ensures that if a client makes a request to a route that doesn't exist
they'll receive an appropriate error message.

Any error that occurs in your routes will be handled by the below global error
handler so that error messages can be formatted and returned to the client in a
consistent way. The error's title, message, and stacktrace is rendered in JSON.
If your application is in production, the error will be rendered without the
error stacktrace.

```js
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  });
});
```

Now let's go back to your GET route for a single tweet. Now that you have
written a database fetch for a tweet, you want to render errors for tweets that
were not found. Make sure your asynchronous route function is taking in `next`
as a parameter. If you have fetched a valid tweet, render the tweet in JSON. If
you have not fetched a valid tweet, you can use a function to generate an error
before invoking the `next` method.

Let's define your error generator function for tweets not found. In your tweet
route module, define a `tweetNotFoundError` function that takes in a tweet ID.
Generate a new `Error` object with a message stating that a tweet of the
given ID could not be found. Assign the error to have a `title` property to be
"Tweet not found." and a `status` of `404`. At the end of the function, return
the error.

Now that the `tweetNotFoundError` function is written to generate and return an
`Error` object, you can pass the return value of the `tweetNotFoundError`
function call into the `next` method to invoke the global error handler.

Take a moment to test your route and error handling in Postman.

### POST /tweets

Set up a POST `/` route to create a new tweet by sending a POST request to
`localhost:8080/tweets`. Now that you will take in JSON data to handle a
request, remember that your application is using the `express.json()` middleware
in `app.js` to parse the body content's JSON and access the `req.body`.

Now that you are taking in data, you'll need to validate that data. Import
`check` and `validationResult` from `express-validator`. Use the
`express-validator` library to check that the `message` value is present, and
that it's not over 280 characters long.

You'll also need to handle your validation errors. In previous projects, you've
been handling validations in each of the route handlers. Today, let's DRY up our
code and set up one middleware function that can check for errors in the `req`
object, and if there are errors, then we can generate an `Error` from that
middleware function and handle it there.

Define a `handleValidationErrors` function and have it take in `req`, `res`, and
`next` as parameters. Begin by generating a `validationErrors` object by
invoking the `validationResult` function with the request:

```js
const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  // TODO: Generate error object and invoke next middleware function
};
```

If you do you have validation errors, use `array()` to transform your
`validationErrors` object into a mappable array. Pluck out each error's `msg`
attribute to generate an `errors` array of error messages:

```js
const errors = validationErrors.array().map((error) => error.msg);
```

After generating the `errors` array, you'll want to create a new `Error` object
with a 400 `status` and title of "Bad request":

```js
const err = Error("Bad request.");
err.errors = errors;
err.status = 400;
err.title = "Bad request.";
next(err);
```

You'll also want the `Error` object to set the `errors` array as a `errors`
property. Invoke the `next` middleware function with the `Error` object you have
created. If you do not have any validation errors, invoke the `next` middleware
function without an argument.

Your `handleValidationErrors` function should look something like this:

```js
const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    return next(err);
  }
  next();
};
```

Now make sure the POST route is using your tweet validations and
`handleValidationErrors` function as middleware. Test your new route in Postman.
Don't forget to set the "Content-Type" header to "application/json" and send
raw JSON data through the request body. Feel free to review how to send a POST
request through the image below.

![postman-post][postman-2a]

Take a moment to also test your error handling. You should see an error response
in JSON upon submitting bad data (i.e. an empty `message` field). Notice that
your error response has the following properties: a `status` of "400", a `title`
of "Bad request.", and an array of `errors`. Make sure that you see a `400 Bad
Request` error if there are failing data validations.

### PUT /tweets/:id

Set up a PUT `/:id(\\d+)` route to update a tweet. Begin by parsing the tweet id
within your `req.params` object and using the parsed `tweetId` to fetch the
tweet to update. If you have a valid tweet, await the update and then render the
updated tweet in JSON format.

If you have not fetched a valid tweet, use the same `404` error handling that
the `GET /tweets/:id` route used. Invoke your `tweetNotFoundError` function
to generate a `404` error. Then pass the return value of the
`tweetNotFoundError` function call into the `next` method.

Make sure to also use the same `400` error handling that the `POST /tweets`
route used. Validate your data and handle your validation errors, like in the
POST route, to generate an error response upon receiving bad form data.

Test your PUT route:

1. Use Postman to send a GET request to `localhost:8080/tweets/1` to view the
   data of your first database tweet.
2. Configure your "Content-Type" header as "application/json".
3. Send a PUT request to `localhost:8080/tweets/1` with updated fields in the
   `raw` request body.
4. View your updated tweet in Postbird.
5. Send a PUT request to `localhost:8080/tweets/1` with invalid data to check
   the error handling.

### DELETE /tweets/:id

Set up the DELETE `/:id(\\d+)` route for deleting a tweet by sending a DELETE
request to `localhost:8080/tweets/:id`. Begin by parsing the tweet ID and using
the id to find your tweet to delete. If a valid tweet is found, await to destroy
the tweet and render a `204` response to confirm the deletion by using
`res.status(204).end()`.

If a valid tweet wasn't found, use the same `404` error handling that the GET
and PUT routes used. Pass the tweet ID into your `tweetNotFoundError` function
call to generate a `404` error. Then pass your newly generated `404` error into
the `next` method to invoke the global error handler.

Lastly, send a request with Postman to test your DELETE route and delete a
tweet. Verify that the tweet was properly deleted by viewing your seeded objects
with Postbird.

## Phase 4: Render tweets in the frontend application

Up to this point, you’ve set up a CRUD API for tweets. All users of your API
have access to the following features:
  * Viewing all existing tweets
  * Viewing a tweet specific tweet
  * Creating a tweet
  * Updating a tweet
  * Deleting a tweet

Now that you have a fully functioning API, you can create another Express
application to serve the pages to render the client-side code for the Twitter
Lite user interface. To review, the term "client-side" means that user triggered
events (i.e. form submissions), the API request/response cycle, and rendering
data is handled by JavaScript code running in the browser.

This new Express application will use the Pug template engine to render HTML
pages on the server-side or backend. Regardless, we'll refer to this Express
application as the "frontend" of the Twitter Lite project since the backend
rendered pages are primarily used to deliver the client-side JavaScript to the
browser.

Here are all the things that you still need to do to make your project a lite
version of Twitter:
* Add an Express "frontend" application to deliver the client-side code to
  interact with the API;
* Set up users and auth in the API; and
* Set up users and auth in the frontend application.

To add the frontend application, clone the repo below into a new folder that's
a sibling to the API project folder.

```
git clone https://github.com/appacademy-starters/express-apis-frontend.git
```

Move into your frontend `express-apis-frontend` directory and run `npm
install`. Now you'll want to start up the frontend server and the backend server
in different terminal tabs or windows. Start your backend server from the first
terminal window by running the `npm start` command from the root of the API
project. Then open a second terminal to start your frontend server by running
`npm start` from within the `express-apis-frontend` folder.

Take a moment to navigate to your backend at `http://localhost:8080/`. You
should see a JSON response of a "test index root" message. Now navigate to your
frontend at `http://localhost:4000/`. Open up your developer tools and you
should see an `h1` element with the content of "Hello World!".

Open your `public/js/index.js` file and add an event listener script. This file
is where you will fetch all tweets from `http://localhost:8080/tweets`. Start
off by awaiting the fetch response (`res`) of all your API tweets. Parse your
response into JSON and destructure the `tweets` property from your parsed
response object. You'll eventually use these `tweets` to render a list of each
tweet message, but just console log all the tweets for now. Make sure to catch
and `console.error` any errors. Your script function should look something like
this:

```js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:8080/tweets");
    const { tweets } = await res.json();
    console.log(tweets);
  } catch (e) {
    console.error(e);
  }
});
```

As a reminder, your `index.js` script will run as soon as the DOM content in
your browser loads for your frontend. Your API fetch call will fire after the
DOM content has loaded and the `tweets` from your response will be logged in
your developer tools console.

If you navigate to `localhost:4000/` to view your frontend application, you
should see a `Failed to fetch` error message. Let's investigate! Instead of
console logging your `tweets`, try console logging the response (`res`) to
figure out more context around your error. If you look closer, your response has
`type` of "cors" and that you have a success status code of `200 OK`. This
indicates that your application has a CORS error!

Resolve this CORS issue back on the API side by installing the `cors` npm
package. In `app.js`, require and configure the `cors` middleware function to
allow requests from the origin `localhost:4000`:

```js
app.use(cors({ origin: "http://localhost:4000" }));
```

Go back to the frontend application and try to console log the tweets again. This
time, all the existing tweets should console log! Now let's actually display the
tweets in HTML elements by updating the "DOMContentLoaded" event listener in
`public/js/index.js`.

After your fetch call in the `try` block, redirect your user to the `/log-in`
page and `return` out of the event listener function if your `res` has a status
of `401`. If the response does not have a status of `401`, parse your response as
JSON and destructure the `tweets` property from your JSON response.

Take a moment to create a `div` element in your `index.pug` template before the
load of your `index.js` script. Set the `div` with an ID of "tweets-container".
In your event listener, use the Vanilla JavaScript `querySelector()` method to
find the `tweetsContainer`. Declare a `tweetsHtml` variable for an array of
stringified HTML blocks that will render tweet messages. Map over your array of
`tweets` to generate the array of stringified HTML blocks.

You can use Bootstrap classes to style the tweets. For each message, render a
`div.card` parent element with a `div.card-body` child element. Within the
`div.card-body` element should live a `p.card-text` element that renders each
tweet's `message` with interpolation. You'll want to join your `tweetsHtml`
array by an empty string (`""`) to create a full stringified HTML block for all
your tweet message blocks. Set the the `innerHTML` property of the
`tweetsContainer` to be the joined `tweetsHtml`.

Lastly, make sure that you are using `console.error` to log any caught errors.
Your script should look something like this:

```js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:8080/tweets");
    const { tweets } = await res.json();
    
    const tweetsContainer = document.querySelector("#tweets-container");
    const tweetsHtml = tweets.map(
      ({ message }) => `
      <div class="card">
        <div class="card-body">
          <p class="card-text">${message}</p>
        </div>
      </div>
    `
    );
    tweetsContainer.innerHTML = tweetsHtml.join("");
  } catch (e) {
    console.error(e);
  }
});
```

Take a moment to confirm that your frontend is fetching and rendering the tweets
on `localhost:4000/`.

## Phase 5: Add the users model

Now it's time to set up the users model to begin implementing user
authentication! Use the following Sequelize command to generate a User model
with `username`, `email`, and `hashedPassword` attributes.

```sh
npx sequelize model:generate --name User --attributes 'username:string,email:string,hashedPassword:string'
```

Make sure to update the user model and migration files with the following
constraints:
* `username` is unique and not nullable
* `email` is unique and not nullable
* `hashedPassword` is the type `STRING.BINARY` and not nullable.

Now run the migration with `npx dotenv sequelize db:migrate` and check in
Postbird to confirm the creation of your User table.


[postbird-3]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Express/projects/api-tweets-project-postbird-3.png

[postbird-4]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Express/projects/api-tweets-project-postbird-4.png

[postman-1]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Express/projects/api-tweets-project-postman-1.gif

[postman-2a]:
https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Express/readings/api-tasks-reading-postman-2a.gif
