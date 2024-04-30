const fs = require('fs');

const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

function countStudents(path) {
  return readFileAsync(path, 'utf-8').then((data) => {
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const cs = lines.filter((row) => row.endsWith('CS'));
    const swe = lines.filter((row) => row.endsWith('SWE'));
    const totalStudent = cs.length + swe.length;
    const csNames = cs.map((row) => {
      const name = row.split(',')[0];
      return name;
    });
    const sweNames = swe.map((row) => {
      const name = row.split(',')[0];
      return name;
    });
    console.log(`Number of students: ${totalStudent}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${sweNames.join(', ')}`);
    return Promise.resolve();
  }).catch((error) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
  });
}

module.exports = countStudents;
