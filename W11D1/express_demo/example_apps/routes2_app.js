const express = require("express");

// create the express app
const app = express();

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

// #1. unrestricted route param
// app.get("/product/:id", (req, res) => {
//   console.log(req.params); // { id: '1' }

//   let productId = req.params.id;

//   res.send(`Product ID: ${productId}`);
// });

// #2. restricted route params
app.get("/product/:id(\\d+)", (req, res) => {
  let productId = req.params.id;

  res.send(`Product ID: ${productId}`);
});

// String Pattern Solution
// app.get("/*produ?ct+o?s?", (req, res) => {
//   res.send("Products");
// });

// Regular Expression Solution
app.get(/^\/((our-)?produ?ct{1,2}s?|productos)\/?$/i, (req, res) => {
  if (!req.path.toLowerCase().startsWith("/products")) {
    return res.redirect("/Products");
  }
  res.send("Products");
});

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
