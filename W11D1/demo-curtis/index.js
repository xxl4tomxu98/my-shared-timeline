const express = require("express");
const app = express();
const {Pet, Owner, PetType} = require('./models');

app.set("view engine", "pug");

app.use(express.urlencoded(
  { extended: true }
));

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
