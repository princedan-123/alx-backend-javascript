const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (data) {
        const content = data;
        const csField = [];
        const sweField = [];
        const totalStudent = content.split('\n');
        totalStudent.shift();
        console.log(`Number of students: ${totalStudent.length}`);
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
        console.log(`Number of students in CS: ${csField.length}. List: ${csField.join(', ')}`);
        console.log(`Number of students in SWE: ${sweField.length}. List: ${sweField.join(', ')}`);
        resolve();
      } else {
        const error = new Error('Cannot load the database');
        reject(error);
      }
    });
  });
}
module.exports = countStudents;
