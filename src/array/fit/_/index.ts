import type { ArrayFitCore } from './index.D';

const _arrayFit = ((minimumLength: number, x: any[]) => {
	if (x.length < minimumLength) return Array.from({ length: minimumLength }, (value, index) => x[index]);
	return x;
}) as ArrayFitCore;

export default _arrayFit;
