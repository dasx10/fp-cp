import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../index.D";
import { ArrayLikeFilterReversRightCore } from "./index.D";

const arrayLikeFilterReversRightCore = (<X extends ArrayLike<unknown> = ArrayLike<unknown>>(
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
			let index = length - 1 as ArrayLikeIndex<X>;
			let value = x[index]       as ArrayLikeValue<X>;
			const filtered = def(value, <ArrayLikeIndex<X>>0, x) ? [value] : [];
			while (--index > -1) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, index, x)) filtered.push(value);
			}
			return filtered;
		};
	};
}) as ArrayLikeFilterReversRightCore;

export default arrayLikeFilterReversRightCore;
