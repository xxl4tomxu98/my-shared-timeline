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
  res.send("<html><h1>Welcome</h1></html>");

  // 2. rendering with static values
  // res.render("basic_layout");

  // 3. rendering data
  // res.render("data_layout", {
  //   title: "Welcome",
  //   heading: "Home",
  //   name: "Alissa",
  // });

  // 4. setting element attribute values
  // res.render("attrib_layout", {
  //   title: "Welcome",
  //   heading: "Home",
  //   name: "Alissa",
  // });

  // 5. conditionals & iteration
  // let items = ["item #1", "item #2", "item #3"];

  // res.render("dynamic_layout", {
  //   title: "Welcome",
  //   heading: "Home",
  //   name: "Alissa",
  //   items: items,
  //   x: 0,
  //   loggedIn: true,
  // });
});

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
