const express = require('express');
const app = express();
app.set("view engine", "pug");

let guests = [];

app.get("/", (req, res) => {
  res.render("index", {title: "Guest List", guests: guests});
});


const post = 8081;
app.listen(post, () => console.log(`Listenting on port ${port}...`));
