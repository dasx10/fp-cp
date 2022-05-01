import type { ArrayLikeIterator } from '../../index.D';
import type { ArrayLikeForEachCore } from './index.D';

const arrayLikeForEachCore: ArrayLikeForEachCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>): void => {
  const { length } = x;
  let index = 0;
  while (index < length) {
    def(x[index], index, x);
    index++
  }
}

export default arrayLikeForEachCore;
