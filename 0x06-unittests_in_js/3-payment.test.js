const sinon = require('sinon');
const {expect} = require('chai');
const Utils =  require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('spying on the utils method used by sendPaymentRequestToApi', () => {
  it('checking how many times the utils method was called', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calledOnce).to.be.true;
    utilsSpy.restore();
  })
  it('checking if the utils method was called with the right argument', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 10);
    expect(utilsSpy.calledWith('SUM', 100, 10)).to.be.true;
    expect(utilsSpy.calledWithExactly('SUM', 100, 10)).to.be.true;
    utilsSpy.restore();
  })
  it('checking the returned value of the spied function', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 10);
    expect(utilsSpy.returned(110)).to.be.true
    sendPaymentRequestToApi(5.5, 2.5);
    expect(utilsSpy.returned(9)).to.be.true;
    sendPaymentRequestToApi(6.1, 4);
    expect(utilsSpy.returned(10)).to.be.true
    sendPaymentRequestToApi(3.5, 7);
    expect(utilsSpy.returned(11)).to.be.true;
    sendPaymentRequestToApi(1, 2.5);
    expect(utilsSpy.returned(4)).to.be.true;
    sendPaymentRequestToApi(2, 6.3);
    expect(utilsSpy.returned(8)).to.be.true;
    utilsSpy.restore();
  })
})
