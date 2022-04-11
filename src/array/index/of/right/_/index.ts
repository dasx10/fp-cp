const _indexOfRight = <Value, X extends readonly any[]>(value: Value, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = length;
    while (--index > 0) if (value === array[index]) return index;
  }
  return -1;
}

export default _indexOfRight;
