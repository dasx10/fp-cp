import type { IterateDef } from './../../../index.D';

const _averageBy = <X>(def: IterateDef<X, number>, array: readonly X[]) => {
  const { length } = array;
  if (length > 0) {
    let index = 0;
    let result = 0;
    while (index < length) {
      result += def(array[index], index, array);
      index++;
    }
    return result / length;
  }

  return 0;
}

export default _averageBy;
