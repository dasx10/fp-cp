const rangeStep = (step: number, start: number, end: number) => {
  const length = Math.floor((end - start) / step);
  let index = 0;
  const stepped = new Array(length);
  while (index < length) {
    stepped[index] = start + index;
    index += step;
  }
  return stepped;
}

export default rangeStep;
