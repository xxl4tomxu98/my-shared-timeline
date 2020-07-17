
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi my name is ${this.name}`
  }
}

export default Animal;