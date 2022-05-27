import type { ArrayLikeIndex, ArrayLikeValue } from '../../../index.D';
import type { ArrayLikeFindIndexCore } from './index.D';

const arrayLikeFindIndexCore: ArrayLikeFindIndexCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      if (def(<ArrayLikeValue<X>>x[index], index, x)) return index;
      index++;
    }
  }

  return -1;
}

export default arrayLikeFindIndexCore;
