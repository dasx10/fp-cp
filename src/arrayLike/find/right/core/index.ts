import type { ArrayLikeIterator } from "../../../index.D";
import type { ArrayLikeFindRightCore } from "./index.D";

const arrayLikeFindRightCore: ArrayLikeFindRightCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let value;
    while (--index > -1) if (def(value = x[index], index, x)) return value;
  }
}

export default arrayLikeFindRightCore;
