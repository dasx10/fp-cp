import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeCountCore }             from "./index.D";

const arrayLikeCountCore: ArrayLikeCountCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let count = 0;
    while (index < length) {
      if (def(x[index], index, x)) count++;
      index++;
    }

    return count;
  }

  return 0;
}

export default arrayLikeCountCore;
