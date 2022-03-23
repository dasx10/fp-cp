import { ArrayLikeIDef } from './../../index.D';

const _forEach = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>): void => {
  const { length } = x;
  let index = 0;
  while (index < length) {
    def(x[index], index, x);
    index++
  }
}

export default _forEach;
