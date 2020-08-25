const express = require("express");

const app = express();

app.set("view engine", "pug");
// app.set('bananaKey', 'banana');

// matches any http method req
app.all("/", (req, res) => {
	console.log(`Req method: ${req.method}`);
	console.log(`Req path: ${req.path}`);
	// console.log(app.settings.bananaKey);

	// 1. sending string of html
	// res.send("<html><h1>Welcome</h1></html>");

	// 2. rendering with static values
	// res.render("basic_layout");

	// 3. rendering data
	// let options = {
	// 	title: "Welcome",
	// 	heading: "Home",
	// 	name: "Alissa",
	// }
	// res.render("data_layout", options);

	// 4. setting element attribute values
	// options = {
	//   title: "Welcome",
	//   heading: "Home",
	//   name: "Alissa",
	// }
	// res.render("attrib_layout", options);

	// 5. conditionals & iteration
	let items = ["item #1", "item #2", "item #3"];
	
	options = {
		title: "Welcome",
		heading: "Home",
		name: "Alissa",
		items: items,
		x: 0,
		loggedIn: true,
	}

	res.render("dynamic_layout", options);
});

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
