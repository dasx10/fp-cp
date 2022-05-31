import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterIndexesCore }     from "./index.D";

const arrayLikeFilterIndexesCore = (<
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
			const filtered = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? [<ArrayLikeIndex<X>>0] : [];
			let index = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				if (def(<ArrayLikeValue<X>>x[index], index, x)) filtered.push(index);
				index++;
			}
			return filtered;
		};
	};
}) as ArrayLikeFilterIndexesCore;

export default arrayLikeFilterIndexesCore;
