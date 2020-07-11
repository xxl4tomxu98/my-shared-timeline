const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const none = require('../problems/08-none.js');

describe("none()", function() {
    it("should return a boolean indicating whether all elements return false when passed to the callback", function() {
        expect(none(['ruby', 'topaz', 'opal'], function(w) {
            return w.includes('e');
        })).to.be.true;

        expect(none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
            return w.includes('e');
        })).to.be.false;
        
        expect(none([4, 5, 7, 1], function(n) {
            return n < 0;
        })).to.be.true;
        
        expect(none([4, -5, 7, -1], function(n) {
            return n < 0;
        })).to.be.false;
    });

    it("should not call the built-in Array#some", function() {
        const someSpy = chai.spy.on(Array.prototype, "some");
        none(['ruby', 'topaz', 'opal'], function(w) {
            return w.includes('e');
        });
        expect(someSpy).to.have.not.been.called();
    });
});
