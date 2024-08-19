const fs = require('fs');

function countStudents(path) {
  let content = '';
  const csField = [];
  const sweField = [];
  try {
    content = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }
}
module.exports = countStudents;
