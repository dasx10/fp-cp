import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import type { ArrayLikeCountRightCore }        from './index.D';

const arrayLikeCountRightCore: ArrayLikeCountRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): number => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? 1 : 0;
		default : {
			let index = length - 1;
			let count = def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x) ? 1 : 0;
			while (--index > -1) if (def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x)) count++;
			return count;
		};
	};
};

export default arrayLikeCountRightCore;
