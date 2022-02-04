/* eslint-disable no-plusplus */
/**
 * @description return a new array with a filled section
 * @example
 * fillStart(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillStart(3, 2)(['a', 'b', 'c', 'd']); // ['a', 3, 3, 3];
 */
function fillStart <T>(value: T, start = 0) {
  return function useFillStart(array: T[]) {
    const { length } = array;
    const newArray = new Array(length);
    let index = 0;
    while (index < start) {
      newArray[index] = array[index];
      index++;
    }

    index = start;
    while (index < length) {
      newArray[index] = value;
      index++;
    }

    return newArray;
  };
}

export default fillStart;
