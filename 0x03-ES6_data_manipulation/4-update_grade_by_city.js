/* A function that filters and maps an array. */

function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city)
    .map((student) => {
      const match = newGrades.find((grade) => grade.studentId === student.id);
      if (match) {
        return { ...student, grade: match.grade };
      }

      return { ...student, grade: 'N/A' };
    });
  return filteredStudents;
}
export default updateStudentGradeByCity;
