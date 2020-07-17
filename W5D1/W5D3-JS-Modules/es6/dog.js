import Animal from './animal.js';

export class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.tricks = [];
  }

  bark() {
    console.log("Woof woof woof")
  }

  learnNewTrick(trick) {
    this.tricks.push(trick);
  }

  performTrick(trick) {
    if (this.tricks.includes(trick)) {
      console.log(`Look at me ${trick}`);
    } else {
      console.log("Hey I don't know that trick");
    }
  }
}

