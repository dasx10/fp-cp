import { ArrayLikeIDef } from "../../../index.D";

const _sumRight = <X>(def: ArrayLikeIDef<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let result = 0;
    while (--index > 0) result += def(x[index], index, x);
    return result;
  }

  return 0;
}

export default _sumRight;
