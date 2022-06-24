import type { ArrayLikeValue }    from "../../index.D";
import type { ArrayLikeSortCore } from "./index.D";

const arrayLikeSortCore = (<X extends ArrayLike<unknown>>(executor: (a: ArrayLikeValue<X>, b: ArrayLikeValue<X>) => any, array: X) => {
	const { length } = array;
	switch (length) {
		case 0: return [];
		case 1: return [array[0]] ;
		case 2: return (executor(<ArrayLikeValue<X>>array[0], <ArrayLikeValue<X>>array[1]) < 0 ? [array[0], array[1]] : [array[1], array[0]]);
		default: {
			const sorted = new Array<ArrayLikeValue<X>>(length);
			const stop = length;
			let index     = 0;
			let nextIndex = 1;
			while (nextIndex < stop) {
				if (executor(<ArrayLikeValue<X>>array[index], <ArrayLikeValue<X>>array[nextIndex]) < 0) {
					sorted[index]     = array[index]     as ArrayLikeValue<X>;
					sorted[nextIndex] = array[nextIndex] as ArrayLikeValue<X>;
				} else {
					sorted[index]     = array[nextIndex] as ArrayLikeValue<X>;
					sorted[nextIndex] = array[index]     as ArrayLikeValue<X>;
				}
				index     += 2;
				nextIndex += 2;
			}

			if (array[index]) sorted[index] = array[index] as ArrayLikeValue<X>;
			return sorted.sort(executor);
		}
	}
}) as ArrayLikeSortCore;

export default arrayLikeSortCore;
