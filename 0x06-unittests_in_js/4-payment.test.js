const {expect} = require('chai');
const  Utils = require('./utils.js');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js')
const calculateNumber = sinon.stub(Utils, 'calculateNumber');
const consolespy = sinon.spy(console, 'log');
calculateNumber.returns(10)

describe('sendPaymentRequestToApi', () => {
	it('testing sendPaymentRequestToApi', () => {
		expect(sendPaymentRequestToApi(100, 20)).to.equal(10);
		sinon.assert.calledWithExactly(calculateNumber, 'SUM', 100, 20);
		expect(consolespy.calledWithExactly('The total is: 10')).to.be.true;
		calculateNumber.restore()
		consolespy.restore()
	})
})
