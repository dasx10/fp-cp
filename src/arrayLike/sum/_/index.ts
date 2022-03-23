import { ArrayLikeIDef } from "../../index.D";

const _sum = <X>(def: ArrayLikeIDef<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let result = 0;
    while (index < length) {
      result += def(x[index], index, x);
      index++;
    }

    return result;
  }

  return 0;
}

export default _sum;
