/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */
const express = require("express");
const app = express();
app.set("view engine", "pug");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded( {extended: false}));
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });
const port = 8081;


const db = require('./models');



const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);


app.get("/",  asyncHandler(async (req, res) => {
  const people = await db.Person.findAll({ include: db.HairColor });
  res.render("index", {title: "People List", people} );
}));



app.get('/new-person', csrfProtection, asyncHandler(async (req, res) => {
  // const hairColors = await db.HairColor.findAll({order: ['color']});
  // res.render('person-add', {
  //   title: 'Add Person',
  //   hairColors,
  //   csrfToken: req.csrfToken(),
  // });
  const person = db.Person.build();
  res.render('person-add', {
      title: 'Add Person',
      person,
      csrfToken: req.csrfToken(),
  });
}));

app.post('/new-person', csrfProtection, asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    biography,
    hairColorId,
  } = req.body;

  const person = db.Person.build({
    firstName,
    lastName,
    age,
    biography,
    hairColorId,
  });

  if(!req.error){
    await person.save();
    res.redirect('/');
  } else {
    res.render('person-add', {
      title: 'Add Person',
      person,
      error: err,
      csrfToken: req.csrfToken(),
    });
  }

  // try {
  //   await person.save();
  //   res.redirect('/');
  // } catch (err) {
  //     res.render('person-add', {
  //     title: 'Add Person',
  //     person,
  //     error: err,
  //     csrfToken: req.csrfToken(),
  //   });
  // }
}));



app.listen(port, ()=>{
  console.log(`Listening on port: ${port}...`);
})



/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
