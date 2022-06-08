import type { ArrayLikeIndex, ArrayLikeValue } from './../../index.D';
import type { ArrayLikeRejectCore }            from './index.D';

const arrayLikeRejectCore = (<X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : {
			const value = x[0] as ArrayLikeValue<X>;
			return def(value, <ArrayLikeIndex<X>>0, x) ? [] : [value];
		};
		default : {
			let value = x[0] as ArrayLikeValue<X>;
			const rejected = def(value, <ArrayLikeIndex<X>>0, x) ? [] : [value];
			let index = 1;
			while (index < length) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, <ArrayLikeIndex<X>>index, x)) {
					index++;
					continue;
				}
				rejected.push(value);
				index++;
			}
			return rejected;
		}
	}
}) as ArrayLikeRejectCore;

export default arrayLikeRejectCore;
