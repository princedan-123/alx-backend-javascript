/* A function that filters an array by city. */

function getStudentsByLocation(array, city) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const filtered = array.filter((student) => student.location === city);
  return filtered;
}
export default getStudentsByLocation;
