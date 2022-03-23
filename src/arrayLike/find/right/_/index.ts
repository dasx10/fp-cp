import { ArrayLikeIDef } from "../../../index.D";

const _findRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > 0) {
      const element = x[index];
      if (def(element, index, x)) return element;
    }
  }
}

export default _findRight;
