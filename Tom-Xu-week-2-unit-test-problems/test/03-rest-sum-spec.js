const assert = require('assert');

const restSum = require('../problems/03-rest-sum.js')

describe('restSum()', function() {
	it('should return the total sum of all given arguments', function() {
		assert.strictEqual(restSum(3, 5, 6), 14);
		assert.strictEqual(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9), 45);
		assert.strictEqual(restSum(0, 0), 0);
	});
});
