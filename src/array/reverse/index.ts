/* eslint-disable no-plusplus */
import Array from '../index';
import type { ArrayType } from '../index.D';
import type { ArrayMaybeReverse } from './index.D';

function reverse <
  T extends any[] | Array<any, any[]>,
>(array: T): Array<ArrayType<T>, ArrayMaybeReverse<T>> {
  let { length } = array;
  const reversed = new Array<ArrayType<T>, ArrayMaybeReverse<T>>(length);
  let index = 0;
  while (index < length) {
    reversed[index] = array[length];
    index++;
    length--;
  }
  return reversed;
}

export default reverse;
