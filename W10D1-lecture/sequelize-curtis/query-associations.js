const { Pet, Owner, PetType, sequelize} = require('./models');

async function queryPetsTypesAndOwners() {
  // const p = await Pet.create({
  //   name: 'Fido1',
  //   age: 10,
  //   petTypeId: 3
  // });

  // const o = await Owner.create({
  //   firstName: 'Zaphod1',
  //   lastName: 'Beeblebrox1'
  // });

  // await p.addOwner(o);


  //lazy loading
  let pet = await Pet.findByPk(2);
  console.log(
    pet.id,
    pet.name,
    pet.age,
    pet.petTypeId,
    pet.PetType,
    pet.Owners,
  );

    //Eager loading
  // pet = await Pet.findByPk(7, {include: [PetType, Owner]});
  // console.log(
  //   pet.id,
  //   pet.name,
  //   pet.age,
  //   pet.petTypeId,
  //   pet.PetType.type,
  //   pet.PetType.id,
  //   pet.Owners.length,
  // );

  // console.log('OWNERS');
  // for (let owner of pet.Owners) {
  //   console.log(owner.id, owner.firstName, owner.lastName);
  // }
    const owner = await Owner.findByPk(3, {
      include: {
        model: Pet,
        include: PetType
      }
    });
    console.log(owner.id, owner.firstName, owner.lastName);
    console.log("PETS");

    for (let pet of owner.Pets) {
      console.log(pet.id, pet.name, pet.age, pet.PetType.type);
    }




  sequelize.close();
}

queryPetsTypesAndOwners();
