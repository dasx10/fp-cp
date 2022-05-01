import type { ArrayValue } from "../../index.D";
import type { Sort } from "./index.D";

const _sort = <X extends readonly any[]>(executor: (a: ArrayValue<X>, b: ArrayValue<X>) => any, array: X): Sort<X> => {
	const { length } = array;
	switch (length) {
		case 0: return [] as Sort<X>;
		case 1: return [array[0]] as Sort<X>;
		case 2: return (executor(array[0], array[1]) ? [array[0], array[1]] : [array[1], array[0]]) as Sort<X>;
		default: {
			const sorted = new Array<ArrayValue<X>>(length);
			const stop = length;
			let index = 0;
			let nextIndex = 1;
			while (nextIndex < stop) {
				if (executor(array[index], array[nextIndex]) < 0) {
					sorted[index] = array[index];
					sorted[nextIndex] = array[nextIndex];
				} else {
					sorted[index] = array[nextIndex];
					sorted[nextIndex] = array[index];
				}
				index += 2;
				nextIndex += 2;
			}

			if (array[index]) sorted[index] = array[index];
			return sorted.sort(executor) as Sort<X>;
		}
	}
}

export default _sort;
