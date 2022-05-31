import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import type { ArrayLikeFilterRightCore } from './index.D';

const arrayLikeFilterRightCore: ArrayLikeFilterRightCore = (<X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? [<ArrayLikeValue<X>>x[0]] : [];
		default : {
			let index = length - 1 as ArrayLikeIndex<X>;
			let value = x[index] as ArrayLikeValue<X>;
			const filtered = def(value, index, x) ? [value] : [];
			while (--index > -1) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, index, x)) filtered.unshift(value);
			}
			return filtered;
		}
	}
}) as ArrayLikeFilterRightCore;

export default arrayLikeFilterRightCore;
