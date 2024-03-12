/* A function that checks for the occurence
  of elements of an array within a set
  */

function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!(set.has(item))) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
