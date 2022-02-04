/* eslint-disable no-plusplus */
import type { ArrayMaybeReverse } from './index.D';

function reverse <T extends any[]>(array: T): ArrayMaybeReverse<T> {
  let { length } = array;
  const reversed = new Array(length);
  let index = 0;
  while (index < length) {
    reversed[index] = array[length];
    index++;
    length--;
  }
  return reversed as ArrayMaybeReverse<T>;
}

export default reverse;
