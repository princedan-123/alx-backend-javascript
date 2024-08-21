const { createServer } = require('http');
const fs = require('fs');

const path = process.argv[2];
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (data) {
        const content = data;
        const csField = [];
        const sweField = [];
        const totalStudent = content.split('\n');
        totalStudent.shift();
        const studentNumber = `Number of students: ${totalStudent.length}`;
        for (const student of totalStudent) {
          if (student.includes('CS')) {
            const studentRow = student.split(',');
            const firstName = studentRow[0];
            csField.push(firstName);
          }
          if (student.includes('SWE')) {
            const studentRow = student.split(',');
            const firstName = studentRow[0];
            sweField.push(firstName);
          }
        }
        const csStudents = `Number of students in CS: ${csField.length}. List: ${csField.join(', ')}`;
        const sweStudents = `Number of students in SWE: ${sweField.length}. List: ${sweField.join(', ')}`;
        const result = `${studentNumber}\n${csStudents}\n${sweStudents}`;
        resolve(result);
      } else {
        const error = new Error('Cannot load the database');
        reject(error);
      }
    });
  });
}
const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const msg = 'This is the list of our students';
    countStudents(path).then((data) => {
      res.end(`${msg}\n${data}`);
    })
      .catch((error) => {
        res.end(error.message);
      });
  }
});
app.listen(1245);
module.exports = app;
