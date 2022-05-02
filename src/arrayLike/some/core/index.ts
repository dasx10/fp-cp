import type { ArrayLikeIterator } from "../../index.D";
import type { ArrayLikeSomeCore } from "./index.D";

const arrayLikeSomeCore: ArrayLikeSomeCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) if (def(x[index], index, x)) index++;
    else return false;
    return true;
  } 

  return false;
}

export default arrayLikeSomeCore;
