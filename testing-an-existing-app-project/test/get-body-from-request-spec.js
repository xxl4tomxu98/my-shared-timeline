const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body',  (done) => {

    let res = getBodyFromRequest(fakeReq);
    res.then(result => {
      if(result===""){
        done();
      } else {
        done(`expected '' got ${result}`);
      }
    });

    fakeReq.emit("end");
  });

  it('returns the data read from the stream', done => {
    let data1 = "start message";
    let data2 = "ending message.";
    let res = getBodyFromRequest(fakeReq);
    fakeReq.emit('data', data1);
    fakeReq.emit('data', data2);
    res.then(result => {
      if(result===data1+data2){
        done();
      } else {
        done(`expected ${data1}${data2} got ${result}`);
      }
    });

    fakeReq.emit("end");

  });
});
