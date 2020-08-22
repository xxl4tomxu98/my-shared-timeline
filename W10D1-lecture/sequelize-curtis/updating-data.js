const readline = require('readline');
const { PetType, sequelize } = require ('./models');

async function updatePet() {
  const petType = await PetType.create({
    type: 'Fish'
  });
  console.log(petType.toJSON());
  //await pause();
  petType.type = 'Kangaroo';
  await petType.save();
  sequelize.close();
}

updatePet();
