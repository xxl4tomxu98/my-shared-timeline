const assert = require('assert');

const stringConverter = require('../problems/04-string-converter.js');

describe('stringConverter()', function() {
	it('should return an object containing the count of each character in the given string', function() {
		assert.deepStrictEqual(stringConverter('apple'), { a: 1, p: 2, l: 1, e: 1 });
		assert.deepStrictEqual(stringConverter('banana'), { b: 1, a: 3, n: 2 });
		assert.deepStrictEqual(stringConverter('raccoon'), { r: 1, a: 1, c: 2, o: 2, n: 1 });
	});
});
