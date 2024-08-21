const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('testing the utils method using hooks', () => {
  let logSpy = null;
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  })
  afterEach(() => {
    logSpy.restore();
  })
  it('testing the log statement in the sendPaymentRequestToApi function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.calledOnce).to.be.true
  })
  it('testing the log statement in sendPaymentRequestToApi with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledWith('The total is: 20')).to.be.true;
    expect(logSpy.calledOnce).to.be.true
  })
})
