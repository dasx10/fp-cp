// // @ts-nocheck

import _curry2 from "../../function/curry/2/_/index";
import type { Def2 } from "../../function/index.D";

// @ts-ignore
function sort <T>(executor: Def2<T, T>, array: readonly T[]): T[];
// @ts-ignore
function sort <T>(executor: Def2<T, T>): (array: readonly T[]) => T[];

// @ts-ignore
const sort = _curry2(<T>(executor: (a: T, b: T) => number, array: T[]) => {
  const { length } = array;
  if (length > 1) {
    const sorted = new Array(length);
    const stop = length;
    let index = 0;
    let nextIndex = 1;
    while (nextIndex < stop) {
      if (executor(array[index], array[nextIndex]) < 0) {
          sorted[index] = array[index];
          sorted[nextIndex] = array[nextIndex];
      } else {
          sorted[index] = array[nextIndex];
          sorted[nextIndex] = array[index];
      }
      index += 2;
      nextIndex += 2;
    }

    if (array[index]) sorted[index] = array[index];
    return sorted.sort(executor);
  }

  return [];
});

export default sort;
