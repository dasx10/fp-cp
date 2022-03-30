import { Index, Unboxing } from "../../index.D";
import { RejectCore } from "./index.D";

const _reject: RejectCore = <X extends readonly any[]>(def: (value: Unboxing<X>, Index: Index<X>, array: X) => any, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index: Index<X> = 0;
    const filtered = new Array<Unboxing<X>>();
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
