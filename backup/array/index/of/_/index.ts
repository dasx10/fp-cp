const _indexOf = <Value, X extends readonly any[]>(value: Value, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = 0;
    while (index < length) {
        if (value === array[index]) return index;
        index++;
    }
  }
  return -1;
}

export default _indexOf;
