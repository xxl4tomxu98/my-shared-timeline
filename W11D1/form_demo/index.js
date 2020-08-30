const express = require('express');

const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

const csrfProtection = csrf({ cookie: true});

let guests = [];

app.get("/", (req, res) => {
  res.render("index", {title: "Guest List", guests:guests});
});


app.get("/guest", csrfProtection, (req, res) => {
  res.render("guest-form", {title: "Guest Form", csrfToken: req.csrfToken()});
});

/* The csrfToken() function was added to the req object by the csrfProtection middleware. The middleware function also generated a secret _csrf value and stored it in the res object's headers so that the client can store it as a cookie. Finally, render the CSRF token under a csrfToken key so that the guest-form.pug template can use it:*/

app.get("/guest-form", csrfProtection, (req, res) =>{
  res.render("guest-form", {
    titile: "Guest Form",
    csrfToken: req.csrfToken()
  });
});

// app.post("/guest", (req, res) =>{
//   const errors = [];
//   const numGuestsNum = parseInt(req.body.numGuests, 10);
//   if (!req.body.fullname) {
//     errors.push("Please fill out the full name field.");
//   }

//   if (!req.body.email) {
//     errors.push("Please fill out the email field.");
//   }

//   if (!req.body.numGuestsNum || numGuestsNum < 1) {
//     errors.push("Please fill out the field for number of guests.");
//   }

//   if (errors.length > 0) {
//     res.render("guest-form", {
//       title: "Guest Form",
//       errors: errors,
//       email: req.body.email,
//       fullname: req.body.fullname,
//       numGuests: req.body.numGuestsNum
//     });
//     return; // `return` if there are errors.
//   }

//   let guestInfo = {
//     fullname: req.body.fullname,
//     email: req.body.email,
//     numGuests: req.body.numGuestsNum
//   };
//   guests.push(guestInfo);
//   res.redirect("/");
// })

const validateGuest = (req, res, next) =>{
  const {fullname, email, numGuests} = req.body;
  const numGuestsNum = parseInt(numGuests, 10);
  const errors = [];

  if (!fullname) {
    errors.push("Please fill out the full name field.");
  }

  if (!email) {
    errors.push("Please fill out the email field.");
  }

  if (!numGuests || numGuests < 1) {
    errors.push("Please fill out a valid number for number of guests.");
  }

  req.errors = errors;
  next();
};

app.post("/guest-form", csrfProtection, validateGuest, (req, res) => {
  const { fullname, email, numGuests } = req.body;
  if (req.errors.length > 0) {
    res.render("guest-form", {
      title: "Guest Form",
      errors: req.errors,
      email,
      fullname,
      numGuests,
      csrfToken: req.csrfToken()
    });
    return;
  }

  const guest = {
    fullname,
    email,
    numGuests
  };
  guests.push(guest);
  res.redirect("/");
});

const port = 3001;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
