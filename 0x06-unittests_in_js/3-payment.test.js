const {expect} = require('chai');
const  Utils = require('./utils.js');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js')
const calculateNumber = sinon.spy(Utils, 'calculateNumber')

describe('sendPaymentRequestToApi', () => {
	it('testing sendPaymentRequestToApi', () => {
		expect(sendPaymentRequestToApi(100, 20)).to.equal(120);
		sinon.assert.calledWith(calculateNumber, 'SUM', 100, 20);
		calculateNumber.restore()
	})
})
