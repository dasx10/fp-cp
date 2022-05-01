import type { ArrayIndex, ArrayValue }  from "../../index.D";
import type { FilterMapIterate } from "../index.D";
import type { FilterCore }       from "./index.D";

const _filter = (<X extends readonly any[]>(def: FilterMapIterate<X>, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = 0 as ArrayIndex<X>;
    const filtered = new Array<ArrayValue<X>>();
    while (index < length) {
      const value = array[index];
      if (def(value, index, array)) filtered.push(value);
      index++;
    }

    return filtered;
  }

  return [];
}) as FilterCore;

export default _filter;
