import type { Index, Unboxing } from "../../index.D";
import type { Mapped } from "./index.D";

const _map = <
  X   extends readonly any[],
  Def extends (value: Unboxing<X>, index: Index<X>, array: X) => any,
>(def: Def, x: X): Mapped<X, Def> => {
  const { length } = x;
  if (length > 0) {
    const mapped = new Array<ReturnType<Def>>(length);
    let index: Index<X> = 0;
    while (index < length) {
      mapped[index] = def(x[index], index, x);
      index++;
    }

    return mapped as Mapped<X, Def>;
  }
  
  return [] as Mapped<X, Def>;
}

export default _map;


