const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('performing asynchronous testing', (done) => {
    const result = getPaymentTokenFromAPI(true);
    result.then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.own.property('data')
      done();
    })
  })
})