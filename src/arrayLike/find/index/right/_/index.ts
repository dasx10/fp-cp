import { ArrayLikeIDef } from './../../../../index.D';

const _findIndexRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > -1) if (def(x[index], index, x)) return index;
  }

  return -1;
}

export default _findIndexRight;
