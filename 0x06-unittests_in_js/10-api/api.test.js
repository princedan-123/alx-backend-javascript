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
	it('testing /availaible route', (done) => {
		request('http://127.0.0.1:7865/available_payments', (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(JSON.parse(body)).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}})
			done()
		})
	})
	it('testing /login post route', (done) => {
		const postData = { "userName": "Betty" };
		const option = {
			"url" : "http://127.0.0.1:7865/login",
			"method": "POST",
			"json": true,
			"body": postData

		}
		request.post(option, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome Betty');
			done();
		})
	})
})
