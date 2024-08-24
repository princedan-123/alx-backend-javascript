const calculateNumber = require('./1-calcul.js');
const { expect } = require('chai');

describe('type SUM', () => {
  it('testing the addition of 2 and 2', () => {
      expect(calculateNumber(type='SUM', 2, 2)).to.equal(4);
    })
  it('testing the addition of 5 and 6', () => {
    expect(calculateNumber(type='SUM', 5, 6)).to.not.equal(10);
  })
  it('testing 1 and 3.7', () => {
    expect(calculateNumber(type='SUM', 1, 3.7)).to.equal(5);
  })
  it('testing 1.2, 3.7', () => {
    expect(calculateNumber(type='SUM', 1.2, 3.7)).to.equal(5);
  })
  it('testing 1.5, 3.7', () => {
    expect(calculateNumber(type='SUM', 1.5, 3.7)).to.equal(6);
  })
  it('testing 4.5 and 1', () => {
    expect(calculateNumber(type='SUM', 4.5, 1)).to.equal(6);
  })
})
describe('type SUBTRACT', () => {
  it('testing 1 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  })
  it('testing 1.2, 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  })
  it('testing 1.5, 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  })
  it('testing 4.5 and 1', () => {
    expect(calculateNumber('SUBTRACT', 4.5, 1)).to.not.equal(7);
  })
  it('testing 4.5 and 1', () => {
    expect(calculateNumber('SUBTRACT', 4.5, 1)).to.equal(4);
  })
  it('testing 5 and 6', () => {
    expect(calculateNumber('SUBTRACT', 5, 6)).to.equal(-1);
  })
})
describe('type DIVIDE', () => {
  it('testing the addition of 2 and 2', () => {
    expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
  })
  it('testing the addition of 5 and 6', () => {
    expect(calculateNumber('DIVIDE', 5, 6)).to.not.equal(0.6);
  })
  it('testing 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  })
  it('testing 1.2, 3.7', () => {
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
  })
  it('testing 1.5, 3.7', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  })
  it('testing 4.5 and 1', () => {
    expect(calculateNumber('DIVIDE', 4.5, 1)).to.equal(5);
  })
  it('testing for zero division', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.be.a('string').and.equal('Error');
  })
})
