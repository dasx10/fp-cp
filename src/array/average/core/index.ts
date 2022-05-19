import type { ArrayIndex, ArrayValue } from "../../index.D";
import type { ArrayAverageCore }     from "./index.D";

const arrayAverageCore: ArrayAverageCore = <X extends readonly any[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => number, array: X) => {
  const { length } = array;
  if (length > 0) {
    let index  = 0 as ArrayIndex<X>;
    let result = 0;

    while (index < length) {
      result += def(array[index], index, array);
      index++;
    }

    return result / length;
  }

  return 0;
}

export default arrayAverageCore;
