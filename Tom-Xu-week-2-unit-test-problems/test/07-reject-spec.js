const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const reject = require('../problems/07-reject.js');

describe('reject()', function() {
    it('should return a new array containing the element that result in false when passed to the callback', function() {
        expect(reject([7, 8, 5, 6, 12, 11], function(n) {
            return n % 2 === 0;
        })).to.eql([ 7, 5, 11 ]);
        
        expect(reject(['breadth', 'GRAPH', 'depth', 'height'], function(s) {
            return s.toLowerCase().includes('a');
        })).to.eql(['depth', 'height']);
    });

    it('should not call the built-in Array#filter', function() {
        const filterSpy = chai.spy.on(Array.prototype, "filter");
        reject([7, 8, 5, 6, 12, 11], function(n) {
            return n % 2 === 0;
        })
        expect(filterSpy).to.have.not.been.called();
    });
});