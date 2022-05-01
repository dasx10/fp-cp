import type { ArrayLikeIterator } from '../../../index.D';
import type { ArrayLikeFindIndexCore } from './index.D';

const arrayLikeFindIndexCore: ArrayLikeFindIndexCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
      if (def(x[index], index, x)) return index;
      index++;
    }
  }

  return -1;
}

export default arrayLikeFindIndexCore;
