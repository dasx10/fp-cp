import type { ArrayLikeIterator, ArrayLikeValue } from '../../index.D';
import type { ArrayLikeMaximumCore } from './index.D';

const arrayLikeMaximumCore: ArrayLikeMaximumCore = <X extends ArrayLike<any>>(def: ArrayLikeIterator<ArrayLikeValue<X>, number>, x: X) => {
  const { length } = x;
  if (length > 0) {
    let flag = def(x[0], 0, x);
    let index = 1;
    while (index < length) {
      const value = def(x[index], index, x);
      if (value > flag) flag = value;
      index++;
    }
    return flag;
  }

  return -Infinity;
}

export default arrayLikeMaximumCore;
