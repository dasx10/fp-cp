import type { ArrayLikeValue } from '../../index.D';

const arrayLikeMinimumCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => {
  const { length } = x;
  if (length > 0) {
    let flag = def(<ArrayLikeValue<X>>x[0], 0, x);
    let index = 1;
    while (index < length) {
      const value = def(<ArrayLikeValue<X>>x[index], index, x);
      if (value < flag) flag = value;
      index++;
    }
  }

  return Infinity;
}

export default arrayLikeMinimumCore;
