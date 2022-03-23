import { IterateDef } from "../../index.D";

const _find = <X>(def: IterateDef<X>, array: X[]) => {
  const { length } = array;
  let index = 0;
  while (index < length) {
    const element = array[index];
    if (def(element, index, array)) return element;
    index++;
  }
}

export default _find;
