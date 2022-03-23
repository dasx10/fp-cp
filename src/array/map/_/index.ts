import { Index, Unboxing } from "../../index.D";

const _map = <
  X   extends readonly any[],
  Def extends (value: Unboxing<X>, index: Index<X>, array: X) => any = (value: Unboxing<X>, index: Index<X>, array: X) => unknown,
>(def: Def, x: X): ReturnType<Def>[] => {
  const { length } = x;
  if (length > 0) {
    const mapped = new Array(length);
    let index: Index<X> = 0;
    while (index < length) {
      mapped[index] = def(x[index], index, x);
      index++;
    }
    return mapped;
  }
  
  return [];
}

export default _map;
