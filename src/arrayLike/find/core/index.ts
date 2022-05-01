import type { ArrayLikeIterator } from "../../index.D";
import type { ArrayLikeFindCore } from "./index.D";

const arrayLikeFindCore = (<X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      const element = x[index];
      if (def(element, index, x)) return element;
      index++;
    }
  }
}) as ArrayLikeFindCore;

export default arrayLikeFindCore;
