## API (Application Programming Interfaces) Learning Objectives

1. Recall that REST is an acronym for Representational State Transfer

2. Describe how RESTful endpoints differ from traditional remote-procedure call (RPC) services

- Remote-procedure call (RPC) services mirror methods on objects. They usually specify the method name in the URL, such as `/getTweetById`, with parameters being passed in through a query string, `http://localhost/getTweetById?id=12`.
- With RPC, we end up with many routes with custom names, unlike the conventions observed in RESTful routes. This means we have to be very familiar with the API in order to use it effectively, as well as necessitating more documentation.
- RPC can be convenient in that the URL tells you exactly what is happening, rather than inferring it like with RESTful conventions. It can also be more convenient in getting related information instead of nesting routes, such as `http://localhost/getCommentsForTweetWithId?id=12`. The name is much more complicated, but tells you exactly what it does.
- Many times the choice is preference, not strictly which is better/worse. `RESTful is` more common and the `convention` over configuration ideas are great for building consistent, predictable applications. It's what we'll be using throughout the course.

3. Identify and describe the RESTful meanings of the combinations of HTTP verbs and endpoint types for both HTML-based applications and APIs

- HTTP verbs: GET, POST, PUT, PATCH, and DELETE
- Endpoint types: collections of resources and singular resources

| HTTP Verb | Collection URL Meaning (`/posts`)    | Single-Resource URL Meaning (`/tweets/19`) |
| --------- | ------------------------------------ | ----------------------------------------- |
| GET       | Get "all" of the specified resources | Get the details of the resource           |
| POST      | Create a new resource                | n/a                                       |
| PUT       | n/a                                  | Replace the resource                      |
| PATCH     | n/a                                  | Update the resource                       |
| DELETE    | Delete all of the resources          | Delete the specified resource             |

4. Recall that RESTful is not a standard (like ECMAScript or URLs), but a common way to organize data interactions

5. Explain how RESTful APIs are meant to be stateless

- This lends itself well to a typical HTTP implementation. Each interaction between the server and client is independent of each other. We do not need to maintain a session, we can make short, discrete requests.

6. Given a data model, design RESTful endpoints that interact with the data model to define application functionality
   ![RESTful routes](RESTful-routes-source.png)

- Get all of the posts: `GET /posts`
- Get a specific post: `GET /posts/1`
- Create a new post: `POST /posts`
- Delete a specific post: `DELETE /posts/1`
- Update a specific post: `PATCH /posts/1` (or `PUT` to replace)
- Get all comments on a post: `GET /posts/1/comments`
- Get a specific comment: `GET /comments/1`
- Create a comment on a post: `POST /posts/1/comments`
- Delete a specific comment: `DELETE /comments/1`
- Update a specific comment: `PATCH /comments/1` (or `PUT` to replace)

7. Use the express.json() middleware to parse HTTP request bodies with type application/json

- In order for us to use json that has been sent in the body of a request, we have to parse the data with middlware. Without parsing the body, it will appear empty. Express has a built in middleware function to parse json, so we can add it in to the top level of our application in order to parse all requests that come in with json-formatted bodies.

```js
app.use(express.json());
```

8. Determine the maximum data an API response needs and map the content from a Sequelize object to a more limited data object

- We often don't need to send back to the client _all_ of the information that's been provided to us from our database query. We may have extra information that is just unnecessary or could even be a security risk to send in our response (we probably don't want to send the user's hashedPassword on a response, for example).
- We can specify what properties of our Sequelize object that we want to send back instead of sending the entire object.
- In this example, after signing a user up for our app and creating a token, we send back the token and only the id of the user in the response.

```js
router.post(
	'/',
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a username'),
	validateEmailAndPassword,
	asyncHandler(async (req, res) => {
		const { username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({ username, email, hashedPassword });

		const token = getUserToken(user);
		res.status(201).json({
			user: { id: user.id },
			token,
		});
	})
);
```

9. Define a global Express error handler to return appropriate responses and status codes

- This is primarily review from last week.
- We can define a middleware to catch unhandled routes and throw a 404 error.
- We can define an error handler that catches Sequelize validation errors and maps the messages to an errors array.
- We include a generic error handler at the end which will catch any errors, whether they have been manipulated by our previous handlers or not, and responds with an appropriate status and information about the error. Here we can also tailor the response based on whether or not we are in a production environment (not passing the stack trace to end-users in production, for example)

```js
// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
	const err = new Error("The requested resource couldn't be found.");
	err.errors = ["The requested resource couldn't be found."];
	err.status = 404;
	next(err);
});
```
