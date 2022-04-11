import { ALI } from './../../index.D';
const _average = <X>(def: ALI<X, number>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let sum = 0;
    while (index < length) {
      sum += def(x[index], index, x);
      index++;
    }

    return sum / length;
  }

  return 0;
}

export default _average;
