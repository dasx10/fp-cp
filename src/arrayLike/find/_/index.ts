import type { ALI } from "../../index.D";

const _find = <X>(def: ALI<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      const element = x[index];
      if (def(element, index, x)) return element;
      index++;
    }
  }
}

export default _find;