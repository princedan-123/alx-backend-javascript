const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('testing the index page', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  })
})