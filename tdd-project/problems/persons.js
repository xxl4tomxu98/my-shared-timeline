class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return `${this.name}, How are you doing?`;
  }

  visit(person){
    return `${this.name} visited ${person.name}.`
  }

  switchVisit(person){
    return person.visit(this);
  }

  update(obj){
    if(obj instanceof Person){
      this.name = obj.name;
      this.age = obj.age;
    } else {
      throw new TypeError("incoming Arg is not an object");
    }
  }

  tryUpdate(obj){
    if(obj instanceof Person){
      this.update(obj);
      return true;
    } else {
      return false;
    }
  }

  static greetAll(arr){
    return arr.map(person => person.sayHello());
  }
}

module.exports = Person;
