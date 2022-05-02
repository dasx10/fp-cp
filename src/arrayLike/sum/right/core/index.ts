import type { ArrayLikeIterator } from "../../../index.D";
import type { ArrayLikeSumRightCore } from "./index.D";

const arrayLikeSumRightCore: ArrayLikeSumRightCore = <X>(def: ArrayLikeIterator<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let result = 0;
    while (--index > -1) result += def(x[index], index, x);
    return result;
  }

  return 0;
}

export default arrayLikeSumRightCore;
