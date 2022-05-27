import type { ArrayLikeValue }              from './../../../../index.D';
import type { ArrayLikeIndex }              from '../../../../index.D';
import type { ArrayLikeFindIndexRightCore } from './index.D';

const arrayLikeFindIndexRightCore: ArrayLikeFindIndexRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeIndex<X> | -1 => {
  const { length } = x;
  if (length > 0) {
    let index = length as ArrayLikeIndex<X>;
    while (--index > -1) if (def(<ArrayLikeValue<X>>x[index], index, x)) return index;
  }

  return -1;
}

export default arrayLikeFindIndexRightCore;
