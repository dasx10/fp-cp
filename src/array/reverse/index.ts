import type { TupleReverse } from './index.D';

function reverse <X extends readonly any[]>(array: X): TupleReverse<X> {
  const { length } = array;
  if (length) {
    const reversed = new Array(length);
    let index = 0;
    let invert = length;
    while (index < length) {
      reversed[index] = array[--invert];
      index++;
    }
    return reversed as TupleReverse<X>;
  }

  return [] as unknown as TupleReverse<X>;
}

export default reverse;
