import type { ArrayIndex, ArrayValue } from "../../../index.D";
import type { FilterMapIterate } from "../../index.D";

const _filterRight = <X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => {
  const { length } = array;
  if (length > 0) {
    const filtered = new Array<ArrayValue<X>>();
    let index = length;
    let value;
    while (--index > -1) if (def(value = array[index], <ArrayIndex<X>>index, array)) filtered.unshift(value);
    return filtered;
  }

  return [];
}

export default _filterRight;
