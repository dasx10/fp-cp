import { ALI } from './../../../index.D';

const _findIndex = <X>(def: ALI<X>, x: ArrayLike<X>) => {
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

export default _findIndex;
