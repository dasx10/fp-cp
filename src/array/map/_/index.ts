import type { Index, Unboxing, UnTypeArray } from "../../index.D";
import type { Mapped } from "./index.D";

const _map = <
	Return,
  X extends readonly any[],
>(def: (value: Unboxing<X>, index: Index<X>, array: X) => Return, x: X): UnTypeArray<Return, X> => {
  const { length } = x;
  if (length > 0) {
    const mapped = new Array<Return>(length);
    let index = 0 as Index<X>;
    while (index < length) {
      mapped[index] = def(x[index], index, x);
      index++;
    }

    return mapped as UnTypeArray<Return, X>;
  }
  
  return [] as unknown as UnTypeArray<Return, X>;
}

export default _map;


