const assert = require('assert');
const calculateNumber = require ('./0-calcul.js')

describe('testing the sum of two rounded numbers', () => {
	it('testing the sum of two whole numbers', () => {
		assert.equal(calculateNumber(1, 3), 4)
	})
	it('testing the sum of an whole number and a float', () => {
		assert.equal(calculateNumber(1, 3.7), 5);
	})
	it('testing the sum of two floats', () => {
		assert.equal(calculateNumber(1.2, 3.7), 5);
	})
	it('testing the sum of another float', () => {
		assert.equal(calculateNumber(1.5, 3.7), 6);
	})
	it('testing for non-roundable negative numbers', () => {
		assert.equal(calculateNumber(-1.2, -3.4), -4);
	})
	it('testing for second roundable number', () => {
		assert.equal(calculateNumber(2.5, 4.5), 8);
	})
	it('testing for second non-roundable number', () => {
		assert.equal(calculateNumber(1.3, 5.2), 6);
	})
})
