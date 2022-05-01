import { ArrayLikeValue } from '../../index.D';

const _min = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => {
  const { length } = x;
  if (length > 0) {
    let flag = def(x[0], 0, x);
    let index = 1;
    while (index < length) {
      const value = def(x[index], index, x);
      if (value < flag) flag = value;
      index++;
    }
  }

  return Infinity;
}

export default _min;
