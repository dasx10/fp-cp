import { IterateDef } from "../../../../index.D";

const _findIndexRight = <X>(def: IterateDef<X>, array: X[]): number => {
  let index = array.length;
  while (--index < 0) if (def(array[index], index, array)) return index;
  return -1;
}

export default _findIndexRight;
