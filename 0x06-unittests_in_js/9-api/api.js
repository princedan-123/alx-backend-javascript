const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send('Welcome to the payment system');
})
app.get('/cart/:id(\\d+)', (request, response) => {
	const id = request.params.id
	response.send(`Payment methods for cart ${id}`)
})
app.listen(7865, () => {
	console.log('API available on localhost port 7865');
})
