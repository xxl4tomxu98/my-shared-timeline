const readline = require('readline');
const { PetType, sequelize } = require ('./models');

async function deletePetType() {
  //delete many from model
  await PetType.destroy({
    where: {
      id: [2,4,13]
    }
  });

  //delete one from instance
  const petType = await PetType.create({
    type: 'Tiger'
  });
  console.log(petType.toJSON());
  //await pause();
  petType.type = 'Raptile';
  await petType.destroy();
  sequelize.close();
}

deletePetType();
