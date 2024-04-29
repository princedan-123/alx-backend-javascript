const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    let data = fs.readFileSync(path, 'utf-8');
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
    console.log(`Number of students: ${totalStudent}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${csNames.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${sweNames.join(', ')}`);
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
