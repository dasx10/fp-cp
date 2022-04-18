const _rangeIncrement = (start: number, end: number) => {
  const length = end - start
  const ranged = new Array(length);
  let index = 0;
  while (index < length) {
    ranged[index] = start + index;
    index++;
  }
  ranged[length] = end;
  return ranged;
}

export default _rangeIncrement;
