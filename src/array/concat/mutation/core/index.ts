import type { ArrayValue } from './../../../index.D';
const arrayConcatMutationCore = <Y extends readonly unknown[], X extends ArrayValue<Y>[]>(y: Y, x: X) => {
	const yLength = y.length;
	const xLength = x.length;
	x.length = xLength + yLength;
	let index = 0;
	while (index < yLength) {
		// @ts-ignore
		x[index + xLength] = y[index];
		index++;
	}
	return x;
}

export default arrayConcatMutationCore;
