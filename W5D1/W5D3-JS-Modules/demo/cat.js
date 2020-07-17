const Animal = require('./animal');

class Cat extends Animal {

  meow() {
    console.log("meow meow meow")
  }
}

module.exports = Cat;