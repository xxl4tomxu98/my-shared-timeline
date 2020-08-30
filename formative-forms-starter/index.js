const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.urlencoded( {extended: true}));
const csrfProtection = csrf({ cookie: true });

const validateUser = (req, res, next) => {
  const {firstName, lastName, email, password, confirmedPassword} = req.body;
  const errors = [];

  if (!firstName) {
    errors.push("Please provide a first name.");
  };

  if (!lastName) {
    errors.push("Please provide a last name");
  };

  if (!email) {
    errors.push("Please provide an email.");
  };

  if (!password) {
    errors.push("Please provide a password.");
  };

  if (password !== confirmedPassword) {
    errors.push("The provided values for the password and password confirmation fields did not match.");
  }
  req.errors = errors;
  next();
}

const validateInteresting = (req, res, next) => {
  const {age, favoriteBeatle, iceCream} = req.body;
  const errors = [];

  if (!age) {
    errors.push("age is required");
  };

  if (typeof age === 'object' || age >120 || age <0) {
  //if (isNaN(age) || age >120 || age <0) {
    errors.push("age must be a valid age");
  };

  if (!favoriteBeatle) {
    errors.push("favoriteBeatle is required");
  };

  if (["John", "George", "Paul", "Ringo", "Scooby-Doo"].indexOf(favoriteBeatle)<0 ) {
    errors.push("favoriteBeatle must be a real Beatle member");
  };

  req.interestingErrors = errors;
  next();
}


const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.get("/", (req, res) => {
  res.render("index", {title: "User Form", users} );
});

app.get("/create", csrfProtection, (req, res) => {
  res.render("create", { title: "Create", csrfToken: req.csrfToken() });
})

app.post("/create", csrfProtection, validateUser, (req, res) => {
  const {firstName, lastName, email} = req.body;

  if (req.errors.length > 0) {
    res.render("create", {
      errors: req.errors,
      firstName,
      lastName,
      email,
      csrfToken: req.csrfToken(),
      title: "Create"
    });
    return;
  }

  const user = {
    id: users.length+1,
    firstName,
    lastName,
    email
  };
  users.push(user);

  res.redirect('/');

});

app.get("/create-interesting", csrfProtection, validateUser, validateInteresting, (req, res) => {
  res.render("create-interesting", { title: "Create-interesting", csrfToken: req.csrfToken() });
})


app.post("/create-interesting", csrfProtection, validateUser, validateInteresting, (req, res) => {
  const {firstName, lastName, email, age, favoriteBeatle, iceCream} = req.body;

  if (req.errors.length > 0 || req.interestingErrors.length >0) {
    res.render("create-interesting", {
      title: "Create-interesting",
      errors: [...req.errors, ...req.interestingErrors],
      csrfToken: req.csrfToken(),
      firstName,
      lastName,
      email,
      age,
      favoriteBeatle,
      iceCream
    });
    return;
  }

  const user = {
    id: users.length+1,
    firstName,
    lastName,
    email,
    favoriteBeatle,
    iceCream: iceCream === "on",
    age
  };
  users.push(user);

  res.redirect('/');

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
