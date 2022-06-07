import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../../index.D";
import type { ArrayLikeFilterIndexesReversRightCore } from "./index.D";

const arrayLikeFilterIndexesReversRightCore = (<
	X extends ArrayLike<unknown>
> (
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return (def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? [0] : []);	
		default : {
			let index = length - 1 as ArrayLikeIndex<X>;
			const filtered = def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x) ? [<ArrayLikeIndex<X>>index] : [];
			while (--index > -1) if (def(<ArrayLikeValue<X>>x[index], index, x)) filtered.push(index);
			return filtered;
		};
	};
}) as ArrayLikeFilterIndexesReversRightCore;

export default arrayLikeFilterIndexesReversRightCore;
