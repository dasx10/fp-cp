import { ArrayLikeIDef } from "../../../index.D";

const _findRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let value;
    while (--index > -1) if (def(value = x[index], index, x)) return value;
  }
}

export default _findRight;
