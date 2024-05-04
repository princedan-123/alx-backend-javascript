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
})
