const assert= require('assert');

const doesKeyExist = require('../problems/02-does-key-exist.js');

describe('doesKeyExist()', function() {
	it('should return a boolean indicating whether the given key is within the object', function() {
		let obj1 = { bootcamp: 'App Academy', course: 'Bootcamp Prep' };
		assert.strictEqual(doesKeyExist(obj1, 'course'), true);
		assert.strictEqual(doesKeyExist(obj1, 'name'), false);

		let obj2 = { name: 'Fido', color: 'brown' }
		assert.strictEqual(doesKeyExist(obj2, 'course'), false);
		assert.strictEqual(doesKeyExist(obj2, 'name'), true);
	});
});
