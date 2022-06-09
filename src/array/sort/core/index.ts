import type { ArrayValue } from "../../index.D";

const arraySortCore = <X extends readonly unknown[]>(executor: (a: ArrayValue<X>, b: ArrayValue<X>) => any, array: X) => {
	const { length } = array;
	switch (length) {
		case 0: return [];
		case 1: return [array[0]] ;
		case 2: return (executor(<ArrayValue<X>>array[0], <ArrayValue<X>>array[1]) < 0 ? [array[0], array[1]] : [array[1], array[0]]);
		default: {
			const sorted = new Array<ArrayValue<X>>(length);
			const stop = length;
			let index     = 0;
			let nextIndex = 1;
			while (nextIndex < stop) {
				if (executor(<ArrayValue<X>>array[index], <ArrayValue<X>>array[nextIndex]) < 0) {
					sorted[index]     = array[index]     as ArrayValue<X>;
					sorted[nextIndex] = array[nextIndex] as ArrayValue<X>;
				} else {
					sorted[index]     = array[nextIndex] as ArrayValue<X>;
					sorted[nextIndex] = array[index]     as ArrayValue<X>;
				}
				index     += 2;
				nextIndex += 2;
			}

			if (array[index]) sorted[index] = array[index] as ArrayValue<X>;
			return sorted.sort(executor);
		}
	}
}

export default arraySortCore;
