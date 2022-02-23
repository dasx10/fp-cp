import type { IterateDef } from './../../../index.D';

const _findIndex = <X>(def: IterateDef<X>, array: X[]): number => {
  const { length } = array;
  if (length > 0) {
    let index = 0;
    while (index < length) {
        if (def(array[index], index, array)) return index;
        index++;
    }
  }
  return -1;
}

export default _findIndex;
