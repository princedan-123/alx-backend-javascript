const assert = require('assert');
const calculateNumber = require ('./1-calcul.js')

describe('testing the sum of two numbers', () => {
	it('testing the sum of two whole numbers', () => {
		assert.equal(calculateNumber('SUM', 1, 3), 4)
	})
	it('testing the sum of an whole number and a float', () => {
		assert.equal(calculateNumber('SUM', 1, 3.7), 5);
	})
	it('testing the sum of two floats', () => {
		assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
	})
	it('testing the sum of another float', () => {
		assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
	})
	it('testing for non-roundable negative numbers', () => {
		assert.equal(calculateNumber('SUM', -1.2, -3.4), -4);
	})
})
describe('testing the division of two numbers', () => {
	it('testing the division of two floats', () => {
		assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
	})
	it('testing zero division', () => {
		assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	})
	it('testing the division of two whole numbers', () => {
		assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
	})
	it('testing the division with remainder', () => {
		assert.equal(calculateNumber('DIVIDE', 5, 2), 2.5);
	});
	it('testing division with negative numbers', () => {
		assert.equal(calculateNumber('DIVIDE', -4, -2), 2);
	})
}) 

describe('testing the subraction of two numbers', () => {
	it('testing zero subraction', () => {
		assert.equal(calculateNumber('SUBTRACT', 10, 0), 10);
	})
	it('testing subraction of rounded numbers', () => {
		assert.equal(calculateNumber('SUBTRACT', 2.5, 3.5), -1);
	})
	it('testing subtraction of one unrounded number', () => {
		assert.equal(calculateNumber('SUBTRACT', 1.2, 5.5), -5);
	})
	it('testing subtraction of negative numbers', () => {
		assert.equal(calculateNumber('SUBTRACT', -2.5, -3.5), 1);
	})
})
