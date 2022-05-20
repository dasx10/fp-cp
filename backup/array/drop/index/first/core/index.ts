import type { ArrayValue } from "../../../../index.D";

const dropFirstCore = <X extends readonly any[]>(array: X) => {
	const { length } = array;
	if (length > 1) {
		const stop = length - 1;
		const dropped = new Array<ArrayValue<X>>(stop);
		let index = 0;
		while (index < stop) {
			dropped[index] = array[++index];
		}
		return dropped;
	}

	return [];
}

export default dropFirstCore;
