import type { ArrayLikeSumByCore } from "./index.D";

const arrayLikeSumByCore: ArrayLikeSumByCore = <Key extends keyof X, X extends Record<Key, number>>(key: Key, x: ArrayLike<X>) => {
  const { length } = x;
  if (length) {
    let index  = 0;
    let result = 0;
    while (index < length) {
      result += x[index][key];
      index++;
    }

    return result;
  }

  return 0;
}

export default arrayLikeSumByCore;
