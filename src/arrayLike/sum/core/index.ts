import type { ArrayLikeIterator } from "../../index.D";
import type { ArrayLikeSumCore } from "./index.D";

const arrayLikeSumCore: ArrayLikeSumCore = <X>(def: ArrayLikeIterator<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let result = 0;
    while (index < length) {
      result += def(x[index], index, x);
      index++;
    }

    return result;
  }

  return 0;
}

export default arrayLikeSumCore;
