import type { ArrayMaybeReverse } from './index.D';

function reverse <T extends any[]>(array: T): ArrayMaybeReverse<T> {
  const { length } = array;
  if (length) {
    const reversed = new Array(length);
    let index = 0;
    let invert = length;
    while (index < length) {
      reversed[index] = array[--invert];
      index++;
    }
    return reversed as ArrayMaybeReverse<T>;
  }

  return [] as ArrayMaybeReverse<T>;
}

export default reverse;
