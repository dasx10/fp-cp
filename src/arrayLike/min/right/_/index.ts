import type { ArrayLikeUnboxing } from "../../../index.D";

const _minRight = <X extends ArrayLike<any>>(def: (value: ArrayLikeUnboxing<X>, index: number, x: X) => number, x: X) => {
  const { length } = x;
  if (length > 0) {
    let index = length - 1;
    let flag = def(x[index], index, x);
    while (--index > 0) {
      const value = def(x[index], index, x);
      if (value < flag) flag = value;
    }
    return flag;
  }

  return Infinity;
}

export default _minRight;
