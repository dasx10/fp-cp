import type { Unboxing }       from "../../../index.D";
import type { ArrayLimitLeft } from "./index.D";

function _limitLeft <Finish extends number, X extends any[]>(finish: Finish, array: X): ArrayLimitLeft<Finish, X> {
  const { length } = array;
  if (length > 0) {
    const stop = length + finish;
    if (stop > 0) {
      const filtered = new Array<Unboxing<X>>(stop);
      let index = 0;
      while (index < stop) {
        filtered[index] = array[index];
        index++;
      }
  
      return filtered as ArrayLimitLeft<Finish, X>;
    }
  }

  return [] as ArrayLimitLeft<Finish, X>;
}

export default _limitLeft;
