const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the payment system').status(200);
})
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`)
})
app.listen(7865, () => {
  console.log('API available on localhost port 7865')
});
module.exports = app;
