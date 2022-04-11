import { ALI } from "../../../index.D";

const _everyRight = <X>(def: ALI<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > -1) {
      if (def(x[index], index, x)) continue;
      return false;
    }
    return true;
  }

  return false;
}

export default _everyRight;
