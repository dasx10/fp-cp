import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../../index.D";
import type { ArrayLikeFilterEntriesReversRightCore } from "./index.D";


const arrayLikeFilterEntriesReversRightCore = (<X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : {
			const value = x[0] as ArrayLikeValue<X>;
			return def(value, <ArrayLikeIndex<X>>0, x) ? [[0, value]] : [];
		};
		default : {
			let index = length - 1 as ArrayLikeIndex<X>;
			let value = x[index]   as ArrayLikeValue<X>;
			const filtered = (def(value, <ArrayLikeIndex<X>>0, x) ? [[0, value]] : []) as [ArrayLikeIndex<X>, ArrayLikeValue<X>][];
			while (index < length) {
				value = x[index] as ArrayLikeValue<X>;
				if (def(value, index, x)) filtered.unshift([index, value]);
				index++;
			}
			return filtered;
		};
	};
}) as ArrayLikeFilterEntriesReversRightCore;

export default arrayLikeFilterEntriesReversRightCore;
