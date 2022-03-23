function _countFrom <Y extends any[], X extends Y>(from: Y, array: X) {
  const fromLength = from.length;
  const { length } = array;
  if (length) {
    let count = 0;
    let index = 0;
    let fromIndex = 0;
    while (index < length) {
      fromIndex = 0;
      while (fromIndex < fromLength) {
        if (from[fromIndex] === array[index]) {
          count++;
          break;
        }
        fromIndex++;
      }
      index++;
    }

    return count;
  }

  return 0;
}

export default _countFrom;
