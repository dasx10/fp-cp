import { ArrayLikeIDef } from "../../../index.D";

const _indexesFilter = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    let indexes = [];
    while (index < length) {
      if (def(x[index], index, x)) indexes.push(index);
      index++;
    }

    return indexes;
  }

  return [];
}

export default _indexesFilter;
