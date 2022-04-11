import { ALI } from "../../../index.D";

const _averageRight = <X>(def: ALI<X, number>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    let sum = 0;
    while (--index > -1) sum += def(x[index], index, x);
    return sum / length;
  }

  return 0;
}

export default _averageRight;
