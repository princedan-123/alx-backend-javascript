/* A function that calculates the sum of ids in an array of objects. */

function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);
    return sum;
  }
  return students;
}
export default getStudentIdsSum;
