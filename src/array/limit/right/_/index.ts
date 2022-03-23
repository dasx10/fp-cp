
function _limitRight <Finish extends number, X extends any[]>(finish: Finish, array: X) {
  const { length } = array;
  if (length > 0) {
    const calcStart = finish + length;
    
    let start = calcStart > 0 ? calcStart : 0;
    const stop = length - start;
    const filtered = new Array(stop);
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

export default _limitRight;
