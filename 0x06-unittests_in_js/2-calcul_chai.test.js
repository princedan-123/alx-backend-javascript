const assert = require('assert');
const {expect} = require('chai');
const calculateNumber = require ('./1-calcul.js')

describe('testing the sum of two numbers', () => {
	it('testing the sum of two whole numbers', () => {
		expect(calculateNumber('SUM', 1, 3)).to.equal(4);
	})
	it('testing the sum of an whole number and a float', () => {
		expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
	})
	it('testing the sum of the first roundable number', () => {
		expect(calculateNumber('SUM', 2.5, 3.2)).to.equal(6)
	})
	it('testing the sum of two floats', () => {
		expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
	})
	it('testing the sum of another float', () => {
		expect(calculateNumber('SUM', -1.5, -3)).to.equal(-4);
	})
	it('testing for non-roundable negative numbers', () => {
		expect(calculateNumber('SUM', -1, -3.5)).to.equal(-4);
	})
})
describe('testing the division of two numbers', () => {
	it('testing the division of two floats', () => {
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
	})
	it('testing zero division', () => {
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.a.string('Error');
	})
	it('testing the division of two whole numbers', () => {
		expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
	})
	it('testing the division with remainder', () => {
		expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
	});
	it('testing division with negative numbers', () => {
		expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
	})
}) 

describe('testing the subraction of two numbers', () => {
	it('testing zero subraction', () => {
		expect(calculateNumber('SUBTRACT', 10, 0)).to.equal(10);
	})
	it('testing subraction of rounded numbers', () => {
		expect(calculateNumber('SUBTRACT', 2.5, 3.5)).to.equal(-1);
	})
	it('testing subtraction of one unrounded number', () => {
		expect(calculateNumber('SUBTRACT', 1.2, 5.5)).to.equal(-5);
	})
	it('testing subtraction of negative numbers', () => {
		expect(calculateNumber('SUBTRACT', -2.5, -3.5)).to.equal(1);
	})
})
