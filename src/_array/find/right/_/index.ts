import { IterateDef } from "../../../index.D";

const _findRight = <X>(def: IterateDef<X>, array: X[]) => {
  let index = array.length;
  while (--index >= 0) {
      const element = array[index];
      if (def(element, index, array)) return element;
  }
}

export default _findRight;
