import type { Index, Unboxing, UnTypeArray } from "../../../index.D";

function _mapRight <X extends readonly any[], Return>(def: (value: Unboxing<X>, index: Index<X>, array: X) => Return, x: X): UnTypeArray<Return, X> {
  const { length } = x;
  if (length > 0) {
    const mapped = new Array(length);
    let index = length;
    while (--index < length) mapped[index] = def(x[index], <Index<X>>index, x);
    return mapped as UnTypeArray<Return, X>;
  }
  
  return [] as unknown as UnTypeArray<Return, X>;
}

export default _mapRight;
