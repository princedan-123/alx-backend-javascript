const fs = require('fs');
const http = require('http');
const utils = require('utils');
const path = process.argv[2]
const readFileAsync = utils.promisify(fs.readFile)

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  return new Promise((resolve, reject) => {
    try {
      let data = fs.readFileAsync(path, 'utf-8');
      data = data.split('\n');
      const CS = data.filter((row) => row.endsWith('CS'));
      const SWE = data.filter((row) => row.endsWith('SWE'));
      const totalStudent = CS.length + SWE.length;
      const csNames = CS.map((row) => {
        const names = [];
        const list = row.split(',');
        names.push(list[0]);
        return names;
      });
      const sweNames = SWE.map((row) => {
        const names = [];
        const list = row.split(',');
        names.push(list[0]);
        return names;
      });
      const ouput = `Number of students: ${totalStudent}
      Number of students in CS: ${CS.length}. List: ${csNames.join(', ')}
	    Number of students in SWE: ${SWE.length}. List: ${sweNames.join(', ')}\n`
      console.log(output);
      resolve(output);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

const app = http.createServer((request, response) => {
  const url = request.url;
  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' } );
    response.end('Hello Holberton School!');
  }
  else if(url === '/students') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(path).then((output) => {
      response.write('This is the list of our students');
      response.end(output);
    })
  }
})
app.listen(1245, console.log('...'));
