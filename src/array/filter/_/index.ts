import type { Index, Unboxing }  from "../../index.D";
import type { FilterMapIterate } from "../index.D";
import type { FilterCore }       from "./index.D";

const _filter: FilterCore = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index: Index<X> = 0;
    const filtered = new Array<Unboxing<X>>();
    while (index < length) {
      const value = array[index];
      if (def(value, index, array)) filtered.push(value);
      index++;
    }

    return filtered;
  }

  return [];
}

export default _filter;
