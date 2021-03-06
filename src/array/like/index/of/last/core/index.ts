import type { ArrayLikeIndexOfLastCore } from "./index.D";

const arrayLikeIndexOfLastCore: ArrayLikeIndexOfLastCore = <Value>(value: Value, x: ArrayLike<Value>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > -1) if (value === x[index]) return index;
  }
  return -1;
}

export default arrayLikeIndexOfLastCore;
