import type { ArrayLikeIndex, ArrayLikeValue } from './../../index.D';
import type { ArrayLikeAverageCore }           from './index.D';

const arrayLikeAverageCore: ArrayLikeAverageCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number, x: X): number => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		default : {
			let index = 0 as ArrayLikeIndex<X>;
			let sum   = 0;
			while (index < length) {
				sum += def(<ArrayLikeValue<X>>x[index], index, x);
				index++;
			}
	
			return sum / length;
		}
	}
}

export default arrayLikeAverageCore;
