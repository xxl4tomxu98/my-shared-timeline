# Express

What is express?
- node framework for building web apps
- creates a server you can make requests to
- define routes which do certain things when you navigate to a specified path 
- we will be covering express in depth later on 



1. defining server port
	 - server will be listening on port 3000
	 - root url `localhost:3000`


2. setting up our root route
	 - navigating to root url will make a `GET` request to `/` route
	 - express will invoke the callback function defined in route
	 - sends back our html file 


3. setting up our `/name` route
	 - navigating to `localhost:3000/name` will make a `GET` req to `/name` route
	 - express will invoke callback function defined in route
	 - faker is library that generates a random name 
	 - sends back JSON object `{ name: randomName }`
	 	 * in the real world, this wouldnt be generating a random namee
		 * it would be doing something like querying a db for a name



# HTML

Overview
- button with an id of "my-button"
- h2 with an id of "random-name"



# JAVASCRIPT


1. grabbing our button by its ID

2. adding a "click" event listener that will invoke `handleClick` callback

3. `handleClick` function
	 - uses fetch to make a GET request to our express server's  `/name` route

4. Fetch API receives response & resolves promise
   - NOTE: won't reject HTTP error status codes (400-600)
     * only rejects on errors like network failures
     * require you to check `ok` key in response
   - must check `ok` attribute on response obj is true

4. if response is okay
	 - `res.json()` reads reseponse stream
	 - resolves with the result of parsing the body text as JSON


5. data will be the JSON object our server is sending back 
	 - sets innerHTML of element  with id  "random-name" to that random name





# PROJECT DEMO - events.js



1. user interface makes javascript call to "ajax engine"
   - "ajax engine" is JS code 
   - event handler uses fetch to make HTTP request

2. fetch sends HTTP request to web server
   - asynch request so rest of JS can continue w/o being blocked
   - server gets info we need (maybe ind db)

3. Server sends back JSON response



// ASK WHY NEED TO CHECK RES.OK

4. Fetch API receives response & resolves promise
   - NOTE: won't reject HTTP error status codes (400-600)
     * only rejects on errors like network failures
     * require you to check `ok` key in response
   - must check `ok` attribute on response obj is true
   - `res.json()` reads reseponse stream
     * resolves with the result of parsing the body text as JSON

5. JS code handles response
   - DOM is updated
