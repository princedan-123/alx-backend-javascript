const { createServer } = require('http');
const countStudents = require('./3-read_file_async.js');
const path = process.argv[2]

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
  }
})
app.listen(1245)