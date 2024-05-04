const {expect} = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');


describe('getPaymentTokenFromAPI', () => {
	it('A test case to test the result of a promise', (done) => {
		getPaymentTokenFromAPI(true).then((result)=> {
			expect(result).to.deep.equal({data: 'Successful response from the API' });
			done();
		}).catch((error) => {
			done(error);
		})
	})
	it('A test case to test if the function does nothing', () => {
		expect(getPaymentTokenFromAPI(false)).to.be.undefined
	})
})
