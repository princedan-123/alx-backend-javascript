/* A script that creates a simple HTTP server */

const http = require('http');

const app = http.createServer((resquest, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!', 'utf-8');
});
app.listen(1245);

module.exports = app;
