import type { Index, Unboxing } from "../../../index.D";
import type { FilterMapIterate } from "../../index.D";

const _filterRight = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => {
  const { length } = array;
  if (length > 0) {
    const filtered = new Array<Unboxing<X>>();
    let index = length;
    let value;
    while (--index > -1) if (def(value = array[index], <Index<X>>index, array)) filtered.unshift(value);
    return filtered;
  }

  return [];
}

export default _filterRight;
