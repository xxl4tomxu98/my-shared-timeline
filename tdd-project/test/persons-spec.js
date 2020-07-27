const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies);

const Person = require("../problems/persons.js");

describe("Person Class", ()=>{
  let tom;
  const name = "Tom";
  const age = 50;

  beforeEach( () => {
    tom = new Person(name, age);
  });

  describe("Persons constructor properties", ()=>{
    it("should set name to be name and age to be age", ()=>{
      expect(tom.name).to.equal(name);
      expect(tom.age).to.equal(age);
    });
  });

  describe("instance method sayHello()", ()=>{
    it("should return a string of the Person instance's name and a greeting message", ()=>{
      let greeting = tom.sayHello();
      expect(greeting).to.equal(`${name}, How are you doing?`);
    });
  });

  describe("instance method visit(another person)", ()=>{
    it("should return string this instance visited the passed in instance", ()=>{
      let jerry = new Person("Jerry", 40);
      let visiting = tom.visit(jerry);
      expect(visiting).to.equal(`${name} visited ${jerry.name}.`);
    });
  });

  describe("instance method switchVisit(other person)", ()=>{
    it("should invoke args' visit function passing current instance", ()=>{
      let jerry = new Person("Jerry", 40);
      let visiting = jerry.visit(tom);
      expect(visiting).to.equal(`${jerry.name} visited ${name}.`);
    });
  });

  describe("prototype method update(obj)", ()=>{
    context("incoming arg is not a valid object", ()=>{
      it("throw a TypeError with a message", ()=>{
        expect(() => tom.update(42)).to.throw(TypeError);
      });
    });

    context("incoming arg is an object", () => {
      it("should update the current instance's properties based on object", ()=>{
        let obj = new Person("Jerry", 40);
        tom.update(obj);
        expect(tom.name).to.equal(obj.name);
        expect(tom.age).to.equal(obj.age);
      });
    });
  });

  describe("prototype method tryUpdate(obj)", ()=>{
    context("instance method update() call was not successful", ()=>{
      it("return false", ()=>{
        expect(tom.tryUpdate(42)).to.equal(false);
      });
    });

    context("instance method update() call was successful", () => {
      it("should update the current instance's properties based on object and return true", ()=>{
        let obj = new Person("Jerry", 40);
        expect(tom.tryUpdate(obj)).to.equal(true);
        expect(tom.name).to.equal(obj.name);
        expect(tom.age).to.equal(obj.age);
      });
    });
  });

  describe("static method greetAll()", ()=>{
    it("should call sayHello() to every element of incoming arr and return resulting arr", ()=>{
      let jerry = new Person("Jerry", 40);
      let mary = new Person("Mary", 30);
      let judy = new Person("Judy", 20);
      expect(Person.greetAll([tom, jerry, mary, judy])).to.eql(["Tom, How are you doing?","Jerry, How are you doing?","Mary, How are you doing?", "Judy, How are you doing?"]);
    });
  });
});
