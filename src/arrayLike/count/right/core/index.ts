import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import type { ArrayLikeCountRightCore }        from './index.D';

const arrayLikeCountRightCore: ArrayLikeCountRightCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X): number => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(x[0], 0, x) ? 1 : 0;
		default : {
			let index = length - 1;
			let count = def(x[index], index, x) ? 1 : 0;
			while (--index > -1) if (def(x[index], index, x)) count++;
			return count;
		};
	};
};

export default arrayLikeCountRightCore;
