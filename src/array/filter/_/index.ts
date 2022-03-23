import { Index, Unboxing }  from "../../index.D";
import { FilterMapIterate } from "../index.D";

const _filter = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = 0;
    const filtered = [] as Unboxing<X>[];
    while (index < length) {
      const value = array[index];
      if (def(value, index as Index<X>, array)) filtered.push(value);
      index++;
    }

    return filtered;
  }

  return [];
}

export default _filter;
