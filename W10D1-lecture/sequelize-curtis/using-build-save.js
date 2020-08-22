const { Pet, sequelize } = require ('./models/index');
async function insertNewPet() {
  const pet = Pet.build({
    name: 'Bowser',
    age: 7,
    petTypeId: 3
  });

  await pet.save();

  sequelize.close();
}

insertNewPet();
