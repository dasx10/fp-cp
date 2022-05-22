import type { ArrayLikeIndex } from './../../index.D';
import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeFindCore } from "./index.D";

const arrayLikeFindCore = (<X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      const element = x[index] as ArrayLikeValue<X>;
      if (def(element, index, x)) return element;
      index++;
    }
  }
}) as ArrayLikeFindCore;

export default arrayLikeFindCore;
