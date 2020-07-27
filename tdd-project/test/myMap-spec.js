const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies);

const myMap = require("../problems/myMap.js");

describe("myMap(arr,cb)", ()=>{


  it("should return new arr with each element as arg to cb", ()=>{
    let arr = [1, 2, 3, 4];
    let cb = (ele)=>ele**2;
    let expected = arr.map(ele=>ele**2);
    let result = myMap(arr, cb);
    expect(result).to.eql(expected);

  });

  let newArr;
  let arr;
  let cb;
  beforeEach(() => {
    arr = [1,2,3,4];
    cb = (ele)=>ele**2;
  });
  it("should not mutate the input array", ()=>{

    newArr = myMap(arr, cb);
    expect(arr).to.deep.equal([1,2,3,4]);
  });

  it("should not call the builtin Array.map function", ()=>{

    newArr = myMap(arr, cb);
    const arrSpy = chai.spy.on(arr,"map");
    expect(arrSpy).to.not.have.been.called();
  });

  it("cb should call each element of input array once", ()=>{

    let cbSpy = chai.spy(cb);
    newArr = myMap(arr, cbSpy);
    expect(cbSpy).to.have.been.called.exactly(4);

  });
});
