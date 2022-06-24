import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeMapReversCore } from "./index.D";

const arrayLikeMapReversCore = (<X extends ArrayLike<unknown>, Result>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		default : {
			const mapped = new Array(length);
			let index = 0;
			let rightIndex;
			while (index < length) {
				mapped[index] = def(<ArrayLikeValue<X>>x[rightIndex = length - (++index)], <ArrayLikeIndex<X>>rightIndex, x);
			}
			return mapped;
		}
	}
}) as ArrayLikeMapReversCore

export default arrayLikeMapReversCore;
