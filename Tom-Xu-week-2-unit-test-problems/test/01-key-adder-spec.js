const assert = require('assert');

const keyAdder = require('../problems/01-key-adder.js');

describe('keyAdder()', function() {
	it('should add a key value pair to the object and return that object', function() {
		let cat = { name: 'Willie' };
		assert.deepStrictEqual(keyAdder(cat, "color", "orange"), {name: "Willie", color: "orange"});
		assert.deepStrictEqual(keyAdder(cat, "sitting", true), {name: "Willie", color: "orange", sitting: true});
		assert.deepStrictEqual(cat, {name: "Willie", color: "orange", sitting: true});
		
		let dog = { name: 'Layla' };
		assert.deepStrictEqual(keyAdder(dog, "fancy", false), {name: "Layla", fancy: false});
		assert.deepStrictEqual(dog, {name: "Layla", fancy: false});
	});
});
