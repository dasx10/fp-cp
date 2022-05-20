import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeMaximumRightCore } from "./index.D";

const arrayLikeMaximumRightCore: ArrayLikeMaximumRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => {
  const { length } = x;
  if (length > 0) {
    let flag = def(x[0], 0, x);
    let index = length;
    while (--index < length) {
      const value = def(x[index], index, x);
      if (value > flag) flag = value;
    }
    return flag;
  }

  return -Infinity;
}

export default arrayLikeMaximumRightCore;
