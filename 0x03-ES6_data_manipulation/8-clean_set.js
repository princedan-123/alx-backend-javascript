function cleanSet(set, startString) {
  const { length } = startString;
  const array = [];
  let newString = '';
  if (length > 0) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        const subString = item.slice(length);
        array.push(subString);
      }
    }
    newString = array.join('-');
  }
  return newString;
}
export default cleanSet;
