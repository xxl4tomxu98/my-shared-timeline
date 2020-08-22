const { PetType, Sequelize: {Op}, sequelize} = require('./models');

async function queryPetTypes() {
  let petTypes;
  petTypes = await PetType.findAll();
  console.log(petTypes.length);
  console.log(petTypes.map(pt => pt.type));



  specialPetTypes = await PetType.findAll({
    where : {
      type: {
        [Op.substring]: 'a'
      }
    }
  });
  console.log(specialPetTypes.map(pt => pt.type));

  let petType = await PetType.findByPk(3);

  console.log("type is: ", petType.type);

  petType = await PetType.findOne({
    where : {
      type: {
        [Op.substring]: 'd'
      }
    }
  });
  console.log("topone of this type is: ", petType.type);


  let createdPetTypes = await PetType.findCreateFind({
    where : {
      type: 'Ferret'
    }
  });
  let petType1 = createdPetTypes[0];
  console.log("created type is: ", petType1.type, "id is: ", petType1.id);


  sequelize.close();
}

queryPetTypes();
