const express = require("express");

// import routes modules
const animalRouter = require("./routes/animals.js");
const userRouter = require("./routes/users.js");
const companyRouter = require("./routes/companies.js");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("router_layout");
});

// tell express app  to use router so it can handle incoming requets
// mount router instances
app.use("/dogs", animalRouter);
app.use("/cats", animalRouter);

app.use("/companies", companyRouter);
app.use("/users", userRouter);

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
