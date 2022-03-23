function _skipRight <Skip extends number, X extends readonly any[]>(skip: Skip, array: X) {
  const { length } = array;
  if (length > 0) {
    const stop = length + skip;
    if (stop > 0) {
      const filtered = new Array(stop);
      let index = 0;
      while (index < stop) {
        filtered[index] = array[index];
        index++;
      }
  
      return filtered;
    }
  }

  return [];
}

export default _skipRight;
