import type { ArrayIndex, ArrayValue } from "../../index.D";
import type { RejectCore }      from "./index.D";

const _reject: RejectCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, Index: ArrayIndex<X>, array: X) => any, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index: ArrayIndex<X> = 0 as ArrayIndex<X>;
    const filtered = new Array<ArrayValue<X>>();
    while (index < length) {
      const value = array[index];
      const condition = def(value, index, array);
      index++;
      if (condition) continue;
      filtered.push(value);
    }

    return filtered;
  }

  return [];
}

export default _reject;
