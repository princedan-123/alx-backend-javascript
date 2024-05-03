const sinon = require('sinon');
const {expect} = require('chai');
const sendPaymentRequestToApi = require('./5-payment.js');
let consolespy = undefined
describe('testing the use of hooks', () => {
	beforeEach(() => {
		consolespy = sinon.spy(console, 'log');
	})
	it('testing sendPaymentRequestToApi with 100 and 20', () => {
		expect(sendPaymentRequestToApi(100, 20)).to.equal(120);
		expect(consolespy.calledWithExactly('The total is: 120')).to.be.true;
		sinon.assert.calledOnce(consolespy);
		consolespy.restore();
	});
	it('testing sendPaymentRequestToApi with with 10, and 10', () => {
		expect(sendPaymentRequestToApi(10, 10)).to.equal(20);
		expect(consolespy.calledWithExactly('The total is: 20')).to.be.true;
		sinon.assert.calledOnce(consolespy);
		consolespy.restore();
	})
})
