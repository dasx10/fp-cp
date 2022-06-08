import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

const arrayLikeRejectRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : {
			const value = x[0] as ArrayLikeValue<X>;
			return def(value, <ArrayLikeIndex<X>>0, x) ? [] : [value];
		};
		default : {
			let index = length - 1;
			let value = x[index] as ArrayLikeValue<X>;
			const rejected = def(value, <ArrayLikeIndex<X>>index, x) ? [] : [value];
			while (--index > -1) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, <ArrayLikeIndex<X>>index, x)) continue;
				rejected.push(value);
			}
			return rejected;
		}
	}
}

export default arrayLikeRejectRightCore;
