const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('Testing the addition of rounded numbers', () => {
  it('testing the addition of 2 and 2', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 2), 4);
  })
  it('testing the addition of 5 and 6', () => {
    assert.notStrictEqual(calculateNumber('SUM', 5, 6), 20);
  })
  it('testing 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  })
  it('testing 1.2, 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  })
  it('testing 1.5, 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  })
  it('testing 4.5 and 1', () => {
    assert.notStrictEqual(calculateNumber('SUM', 4.5, 1), 10);
  })
  it('testing 4.5 and 1', () => {
    assert.strictEqual(calculateNumber('SUM', 4.5, 1), 6);
  })
})
describe('testing subtraction of two rounded numbers', () => {
  it('testing 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  })
  it('testing 1.2, 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  })
  it('testing 1.5, 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  })
  it('testing 4.5 and 1', () => {
    assert.notStrictEqual(calculateNumber('SUBTRACT', 4.5, 1), 7);
  })
  it('testing 4.5 and 1', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1), 4);
  })
  it('testing 5 and 6', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 6), -1);
  })
})
describe('Testing the division of rounded numbers', () => {
  it('testing the addition of 2 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
  })
  it('testing the addition of 5 and 6', () => {
    assert.notStrictEqual(calculateNumber('DIVIDE', 5, 6), 0.6);
  })
  it('testing 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  })
  it('testing 1.2, 3.7', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  })
  it('testing 1.5, 3.7', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  })
  it('testing 4.5 and 1', () => {
    assert.notStrictEqual(calculateNumber('DIVIDE', 4.5, 1), 4);
  })
  it('testing 4.5 and 1', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1), 5);
  })
  it('testing for zero division', () => {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
  })
})