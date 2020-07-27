// chai is an assertion library
const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies);

const { bonus, Employee } = require('../employee');


describe ("Employee", ()=>{
  let jake;
  const name = "Jake";
  const salary = 10;
  beforeEach(() =>{
    jake = new Employee(name, salary);
  });
  describe("bonus function", ()=>{
    it("should return doubled number", ()=>{
      let result = bonus(salary);
      let expected = salary * 2;
      expect(result).to.equal(expected);
    })
  })

  describe("class Employee", ()=>{
    it("should set the name property", ()=>{
      expect(jake.name).to.equal(name);
    });
    it("should set the salary property", ()=>{
      expect(jake.salary).to.equal(salary);
    });
    it("should set the atWork property to be false at initiation", ()=>{
      expect(jake.atWork).to.equal(false);
    });
  });

  describe("prototype.commute()", ()=>{
    it("should flip the boolean value of the atWork property and return the new value", ()=>{
      let test1 = jake.commute();
      expect(jake.atWork).to.be.true;
      expect(test1).to.be.true;
      let test2 = jake.commute();
      expect(jake.atWork).to.be.false;
      expect(test2).to.be.false;
    });
  });

  describe("prototype.goHome()", ()=>{
    context("if the atWork property is true", ()=>{
      it("should invoke the prototype.commute()method", ()=>{
        jake.commute();
        const commuteSpy = chai.spy.on(jake,"commute");
        jake.goHome();
        expect(commuteSpy).to.have.been.called.once;
      });
      it("should set the atWork property to false", ()=>{
        jake.commute();
        jake.goHome();
        expect(jake.atWork).to.be.false;
      });
    });

    context("if the atWork property is false", ()=>{
      it("should not affect the atWork property", ()=>{
        jake.goHome();
        expect(jake.atWork).to.be.false;
      });
    });
  });

  describe("prototype.getPromotion", ()=>{
    context("if the atWork property is false", ()=>{
      it("throw an Error", ()=>{
        expect(()=>jake.getPromotion()).to.throw(Error);
      });
    });

    context("if the atWork property is true", ()=>{
      it("should get a bonus added to their salary and return that salary", ()=>{
        jake.commute();
        let test3 = jake.getPromotion();
        let expected = 30;
        expect(test3).to.equal(expected);
        expect(jake.salary).to.equal(expected);
      });
    });
  });
});
