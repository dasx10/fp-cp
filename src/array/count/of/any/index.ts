/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
function countOfAny <T extends [any, ...any[]]>(...searchValues: T) {
  const searchLength = searchValues.length;
  return function useCountOfAny(array: T extends (infer U)[] ? U[] : []) {
    const { length } = array;
    if (length) {
      let count = 0;
      let index = 0;
      let searchIndex = 0;
      loopArray: while (index < length) {
        while (searchIndex < searchLength) {
          if (searchValues[searchIndex] === array[index]) {
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
  };
}

export default countOfAny;
