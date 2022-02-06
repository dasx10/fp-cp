/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
function countOfAnyContext <T, S extends [T, T, ...T[]]>(this: T[], ...searchValues: S) {
  const { length } = this;
  const searchLength = searchValues.length;
  if (length) {
    let count = 0;
    let index = 0;
    let searchIndex = 0;
    loopArray: while (index < length) {
      while (searchIndex < searchLength) {
        if (searchValues[searchIndex] === this[index]) {
          count++;
          continue loopArray;
        }
        searchIndex++;
      }
      index++;
    }
    return count;
  }
  return 0;
}

export default countOfAnyContext;
