import { ALI } from "../../index.D";

const _count = <X>(def: ALI<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let sum = 0;
    while (index < length) {
      if (def(x[index], index, x)) sum++;
      index++;
    }

    return sum;
  }

  return 0;
}

export default _count;
