/* A function that creates and returns a Set */

function setFromArray(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const set = new Set(array);
  return set;
}
export default setFromArray;
