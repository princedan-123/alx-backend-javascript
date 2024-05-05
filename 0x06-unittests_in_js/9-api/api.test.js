const request = require('request');
const {expect} = require('chai');

describe('Testing a API endpoint', () => {
	it('testing the "/" route', (done) => {
		request('http://127.0.0.1:7865', (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome to the payment system');
			done();
		})
	})
	it('testing the a route that has a route parameter', (done) => {
		request('http://127.0.0.1:7865/cart/12', (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Payment methods for cart 12')
			done();
		})
	})
	it('testing the route parameter with a non digit', (done) => {
		request('http://127.0.0.1:7865/cart/two', (error, response, body) => {
			expect(response.statusCode).to.equal(404);
			expect(response.statusMessage).to.equal('Not Found');
			done();
		})
	})
})
