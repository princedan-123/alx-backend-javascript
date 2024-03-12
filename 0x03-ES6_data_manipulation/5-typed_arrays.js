/* A function that creates an ArrayBuffer */

function createInt8TypedArray(length, position, value) {
  if (!(typeof length === 'number' && typeof position === 'number')) {
    throw new Error('Position outside range');
  }
  if (!(typeof value === 'number')) {
    throw new Error('Position outside range');
  }
  if (position > length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
export default createInt8TypedArray;
