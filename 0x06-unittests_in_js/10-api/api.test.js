const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('Returns the right status for /', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  })
  it('Returns the right status code when parameter is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.equal('Payment methods for cart 12');
      done();
    })
  })
  it('Returns the error status code when parameter is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    })
  })
  it('testing the /available_payments route', (done) => {
    request('http://localhost:7865/available_payments', {json: true}, (error, response, body ) => {
      expect(body).eql({payment_methods:{credit_cards:true,paypal:false}});
      expect(response.statusCode).to.equal(200);
      expect(body).to.have.property('payment_methods');
      expect(body).to.have.nested.property('payment_methods.credit_cards');
      done();
    })
  })
  it('testing the /login post route', (done) =>  {
    const post = {
      url: 'http://localhost:7865/login',
      json: true,
      body: { "userName": "Betty" }
    }
    request.post(post, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a('string');
      expect(body).to.equal(`Welcome ${post.body.userName}`)
      done();
    })
  })
})
