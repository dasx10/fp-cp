import type { ArrayIndex, ArrayValue } from "../../../index.D";
import type { RejectCore }      from "../../_/index.D";

const _rejectRight: RejectCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, Index: ArrayIndex<X>, array: X) => any, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index = length;
    const filtered = new Array<ArrayValue<X>>();
    let value;
    let condition = false;
    while (--index > -1) {
      value = array[index];
      condition = def(value, <ArrayIndex<X>>index, array);
      index++;
      if (condition) continue;
      filtered.unshift(value);
    }

    return filtered;
  }

  return [];
}

export default _rejectRight;
