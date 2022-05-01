import type { ArrayLikeIterator } from '../../../../index.D';
import type { ArrayLikeFindIndexRightCore } from './index.D';

const arrayLikeFindIndexRightCore: ArrayLikeFindIndexRightCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > -1) if (def(x[index], index, x)) return index;
  }

  return -1;
}

export default arrayLikeFindIndexRightCore;
