const assert = require('assert');

const lesserCallback = require('../problems/05-lesser-callback.js');

describe('lesserCallback()', function() {
    it('should return the result of the callback that is smaller', function() {
        let doubler = function (n) {
            return 2 * n;
        };
        
        let squarer = function (n) {
            return n * n;
        };
        
        assert.equal(lesserCallback(5, doubler, squarer), 10);
        assert.equal(lesserCallback(1, doubler, squarer), 1);
        assert.equal(lesserCallback(9, Math.sqrt, doubler), 3);
    });
});