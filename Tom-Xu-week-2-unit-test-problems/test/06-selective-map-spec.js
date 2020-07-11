const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const selectiveMap = require("../problems/06-selective-map.js");

describe("selectiveMap()", function() {
    it("should return a new array, only mapping the elements with the second callback if they return true when passed into the first callback", function() {
        function isEven(n) {
            return n % 2 === 0;
        }

        function isPositive(n) {
            return n > 0;
        }

        function square(n) {
            return n * n;
        }

        function flipSign(n) {
            return n * -1;
        }

        expect(selectiveMap([8, 5, 10, 4], isEven, square)).to.eql([ 64, 5, 100, 16 ]);
        expect(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign)).to.eql([ 10, -4, 7, -6, 2, -9 ]);
        expect(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square)).to.eql([-10, 16, 49, 36, -2, -9]);
    });

    it("should not call the built-in Array#map", function() {
        function isEven(n) {
            return n % 2 === 0;
        }

        function square(n) {
            return n * n;
        }

        const mapSpy = chai.spy.on(Array.prototype, 'map');
        selectiveMap([8, 5, 10, 4], isEven, square)
        expect(mapSpy).to.have.not.been.called();
    });
});
