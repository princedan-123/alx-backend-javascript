const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';
  it('Returns the right status', (done) => {
    request(endpoint, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  })
})