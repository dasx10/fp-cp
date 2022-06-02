import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterReverseCore }         from "./index.D";

const arrayLikeFilterReverseCore = (<X extends ArrayLike<unknown> = ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0 : return [];
		case 1 : {
			const value = x[0] as ArrayLikeValue<X>;
			return def(value, <ArrayLikeIndex<X>>0, x) ? [value] : [];
		};
		default: {
			let value = x[0] as ArrayLikeValue<X>;
			const filtered = def(value, <ArrayLikeIndex<X>>0, x) ? [value] : [];
			let index = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, index, x)) filtered.unshift(value);
				index++;
			}
			return filtered;
		};
	};
}) as ArrayLikeFilterReverseCore;

export default arrayLikeFilterReverseCore;
