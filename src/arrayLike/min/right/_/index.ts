import type { ArrayLikeValue } from "../../../index.D";

const _minRight = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: number, x: X) => number, x: X) => {
  const { length } = x;
  if (length > 0) {
    let index = length - 1;
    let value = def(x[index], index, x);
    let flag = value;
    while (--index > -1) if ((value = def(x[index], index, x)) < flag) flag = value;
    return flag;
  }

  return Infinity;
}

export default _minRight;
