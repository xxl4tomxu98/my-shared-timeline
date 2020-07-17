let Dog = require('./dog');
let Cat = require('./cat');

class Family {
  constructor() {
    this.pets = [];
  }

  adoptDog(name, age) {
    let newDog = new Dog(name, age)
    this.pets.push(newDog);
    return newDog;
  }

  findPet(petName) {
    let pet = this.pets.filter(pet => pet.name === petName)[0];
    return pet;
  }

  teachTrick(petName, trick) {
    let pet = this.findPet(petName);

    if (pet instanceof Dog) {
      pet.learnNewTrick(trick);
      console.log(`woof woof ${petName} can ${trick}`);
    } else {
      console.log('sorry your cat says no thanks')
    }
  }

  numPets() {
    return this.pets.length;
  }
}

module.exports = Family;