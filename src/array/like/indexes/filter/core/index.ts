import { ArrayLikeIterator } from "../../../index.D";

const arrayLikeIndexesFilterCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    const indexes: number[] = [];
    while (index < length) {
      if (def(x[index], index, x)) indexes.push(index);
      index++;
    }

    return indexes;
  }

  return [];
}

export default arrayLikeIndexesFilterCore;
