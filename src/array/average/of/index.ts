/* eslint-disable no-plusplus */
function averageOf(array: number[]) {
  const { length } = array;
  if (length) {
    let index = 0;
    let sum = 0;
    while (index < length) {
      sum += array[index];
      index++;
    }
    return sum / length;
  }

  return 0;
}

export default averageOf;
