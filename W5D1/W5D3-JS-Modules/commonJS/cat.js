const Animal = require('./animal');

class Cat extends Animal {

  meow() {
    return "meowwwwwwww"
  }
}

module.exports = Cat;