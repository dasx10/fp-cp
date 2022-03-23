import { Index, Unboxing } from "../../../index.D";

function _mapRight <X extends readonly any[], Return>(def: (value: Unboxing<X>, index: Index<X>, array: X) => Return, x: X) {
  const { length } = x;
  if (length > 0) {
    const mapped = new Array(length);
    let index = length;
    while (--index < length) mapped[index] = def(x[index], <Index<X>>index, x);
    return mapped;
  }
  
  return [];
}

export default _mapRight;
