/* A function that takes an array as a parameter and returns an array of ids */

function getListStudentIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const ids = array.map(({ id }) => id);
  return ids;
}
export default getListStudentIds;
