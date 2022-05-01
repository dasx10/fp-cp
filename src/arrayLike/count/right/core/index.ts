import { ArrayLikeIterator } from "../../../index.D";

const arrayLikeCountRightCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let sum = 0;
    while (--index > -1) if (def(x[index], index, x)) sum++;
    return sum;
  }

  return 0;
};

export default arrayLikeCountRightCore;
