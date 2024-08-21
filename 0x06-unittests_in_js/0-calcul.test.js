const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('Testing the addition of rounded numbers', () => {
    it('testing the addition of 2 and 2', () => {
        assert.strictEqual(calculateNumber(2, 2), 4);
    })
    it('testing the addition of 5 and 6', () => {
        assert.notStrictEqual(calculateNumber(5, 6), 20);
    })
    it('testing 1 and 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    })
    it('testing 1.2, 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    })
    it('testing 1.5, 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    })
    it('testing 4.5 and 1', () => {
        assert.notStrictEqual(calculateNumber(4.5, 1), 10);
    })
    it('testing 4.5 and 1', () => {
        assert.strictEqual(calculateNumber(4.5, 1), 6);
    })
})