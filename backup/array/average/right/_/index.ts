import type { ArrayIndex, ArrayValue } from "../../../index.D";

const _averageRight = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => number, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = length;
    let sum = 0;
    while (--index > -1) sum += def(array[index], index as ArrayIndex<X>, array);
    return sum / length;
  }

  return 0;
}

export default _averageRight;
