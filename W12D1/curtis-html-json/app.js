const createError = require('http-errors');
const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const {Pet, Owner, PetType} = require('./models');
const logger = require("morgan");
const petsRouter = require("./routes/pets");
const petsApiRouter = require("./routes/api-pets.js");

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded(
  { extended: false }
));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/pets', petsRouter);
app.use('/owners', ownersRouter);
app.use('/api/pets', petsApiRouter);

//catch 404 and forward to error handler
app.use(function(_, __, next) {
  next(createError(404));
});

//error hnadler
app.use(function(err, req, res, next) {
  //set locals only provide errro in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render("error");

});




app.get("/pets", async (req, res) =>{
  const data = {};

  const pets = await Pet.findAll({
    include: [PetType, Owner],
    order: ['name']
  });

  const petTypes = await PetType.findAll({
    order: ['type']
  });


  const owners = await Owner.findAll({
    order: ['lastName', 'firstName']
  });

  data.pets = pets;
  data.petTypes = petTypes;
  data.owners = owners;
  res.render('pets', data);
});

app.get('/owners', async (req, res) => {
  const data = {};

  const owners = await Owner.findAll({
    order: ['lastName', 'firstName']
  });
  data.owners = owners;
  res.render('owners', data);
});

app.post("/pets", async (req, res)=>{
  const {body: data} = req;

  const pet = await Pet.create({
    name: data.name,
    age: data.age,
    petTypeId: data.typeId
  });

  const ownerIds = data.ownerIds.split(',');
  const owners = await Owner.findAll({
    where: {id: ownerIds} });
  for (let owner of owners) {
    await pet.addOwner(owner);
  }
  res.redirect('/pets');
});

app.post("/owners", async (req, res) =>{
  const { body: data} = req;
  await Owner.create({
    firstName: data.firstName,
    lastName: data.lastName
  });
  res.redirect('/owners');
});

app.get("/", (_, res) => res.redirect("/pets"));
app.use(express.static('./assets'));

const port = 8081;

app.listen(port, ()=>{
  console.log(`Server accepting connections on ${port}`);
});
