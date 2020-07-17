const Animal = require('./animal');

class Dog extends Animal {

  bark() {
    return "Woof woof woof"
  }
}

module.exports = Dog;