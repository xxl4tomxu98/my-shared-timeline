class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi my name is ${this.name}`
  }
}

class Dog extends Animal {

  bark() {
    return "Woof woof woof"
  }
}

class Cat extends Animal {

  meow() {
    return "meowwwwwwww"
  }
}

// console.log(module);

// module.exports.Book = Book;
// module.exports.Movie = Movie;

// console.log(module.exports);

module.exports = {
  Dog,
  Cat
};

// exports.Book = Book;
// exports.Movie = Movie;

// console.log(module.exports);

