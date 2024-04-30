/* A script that creates a simple HTTP server */

const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});
app.listen(1245);

module.exports = app;
