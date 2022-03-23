function _skipLeft <Skip extends number, X extends readonly any[]>(skip: Skip, array: X) {
  const { length } = array;
  if (length > skip) {
    const stop = length - skip;
    const filtered = new Array(stop);
    let start = skip;
    let index = 0;
    while (index < stop) {
      filtered[index] = array[start];
      start++;
      index++;
    }

    return filtered;
  }

  return [];
}

export default _skipLeft;
