const { Pet, Owner, sequelize } = require ('./models/index');
async function insertNewPet() {
  // const pet = Pet.build({
  //   name: 'Bowser',
  //   age: 7,
  //   petTypeId: 3
  // });
  const pet = await Pet.create({
    name: 'Gilligan',
    age: 2,
    petTypeId: 3
  });

  const owner = await Owner.create({
    firstName: 'Zaphox',
    lastName: 'Beeblebrox'
  });

  await pet.addOwner(owner);
  //owner.addPet(pet);


  sequelize.close();
}

insertNewPet();
