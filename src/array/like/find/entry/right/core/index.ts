import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../index.D";
import type { ArrayLikeFindEntryRightCore } from "./index.D";

const arrayLikeFindEntryRightCore: ArrayLikeFindEntryRightCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X) => {
	const { length } = x;
	switch (length) {
		case 0 : return;
		case 1 : {
			const value = x[0] as ArrayLikeValue<X>;
			if (def(value, <ArrayLikeIndex<X>>0, x)) return [0, value] as [ArrayLikeIndex<X>, ArrayLikeValue<X>];
			break;
		};
		default: {
			let index = length as ArrayLikeIndex<X>;
			while (--index > -1) {
				const value = x[index] as ArrayLikeValue<X>;
				if (def(value, index, x)) return [index, value] as [ArrayLikeIndex<X>, ArrayLikeValue<X>];
			}
			break;
		}
	}
}

export default arrayLikeFindEntryRightCore;
