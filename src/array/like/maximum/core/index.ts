import type { ArrayLikeIndex, ArrayLikeValue } from '../../index.D';
import type { ArrayLikeMaximumCore }           from './index.D';

const arrayLikeMaximumCore: ArrayLikeMaximumCore = <
	X extends ArrayLike<unknown>
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number, x: X): number => {
  const { length } = x;
  switch (length) {
		case 0  : return -Infinity;
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		default : {
			let value = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
			let flag  = value;
			let index = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				value = def(<ArrayLikeValue<X>>x[index], index, x);
				if (value > flag) flag = value;
				index++;
			}
			return flag;
		}
	}
}

export default arrayLikeMaximumCore;
