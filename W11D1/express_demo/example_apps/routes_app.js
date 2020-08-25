const express = require("express");

// create the express app
const app = express();

// configure express to use pug as default template engine
// first arg is app setting property, second is val
app.set("view engine", "pug");

app.get("/", (req, res) => {
  let options = {
    productPaths: ["/product/1", "/product/2", "/product/asdf"],
    productsPaths: [
      "/products",
      "/our-products",
      "/product",
      "/prodcts",
      "/productts",
      "/productos",
    ],
  };

  res.render("layout", options);
});


// define a port and start listening for connections
const port = 8080;

// cb called when listens for http connections from client
app.listen(port, () => console.log(`Listening on port ${port}...`));
