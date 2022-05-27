import type { ArrayLikeIndex, ArrayLikeValue } from '../../index.D';
import type { ArrayLikeForEachCore }           from './index.D';

const arrayLikeForEachCore: ArrayLikeForEachCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown,
	x   : X
): void => {
  const { length } = x;
  let index = 0 as ArrayLikeIndex<X>;
  while (index < length) {
    def(<ArrayLikeValue<X>>x[index], index, x);
    index++;
  }
}

export default arrayLikeForEachCore;
