import { ArrayLikeIDef } from "../../../index.D";

const _everyRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    loopEvery: while (--index > 0) {
      if (def(x[index], index, x)) continue loopEvery;
      return false;
    }
    return true;
  }

  return false;
}

export default _everyRight;
