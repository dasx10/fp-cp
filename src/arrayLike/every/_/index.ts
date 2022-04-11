import { ALI } from "../../index.D";

const _every = <X>(def: ALI<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    loopEvery: while (index < length) {
      if (def(x[index], index, x)) {
        index++;
        continue loopEvery;
      }

      return false;
    }
    return true;
  }

  return false;
}

export default _every;
