import type { ArrayLikeConcatCore } from "./index.D";

const arrayLikeConcatCore = (<Y extends ArrayLike<unknown>, X extends ArrayLike<unknown>>(y: Y, x: X) => {
	const yLength = y.length;
	const xLength = x.length;
	const result = new Array(yLength + xLength);
	let index = 0;
	while (index < xLength) {
		result[index] = x[index];
		index++;
	}
	index = 0;
	while (index < yLength) {
		result[index + xLength] = y[index];
		index++;
	}
	return result;
}) as ArrayLikeConcatCore

export default arrayLikeConcatCore;
