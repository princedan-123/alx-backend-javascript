const { createServer } = require('http');

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;
