import type { IndexOfRightCore } from "./index.D";

const _indexOfRight: IndexOfRightCore = <Value>(value: Value, x: ArrayLike<Value>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) {
        if (value === x[index]) return index;
        index++;
    }
  }
  return -1;
}

export default _indexOfRight;
