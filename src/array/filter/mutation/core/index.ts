import type { ArrayIndex } from './../../../../../backup/array/index.D';
import type { ArrayValue } from './../../../index.D';
import type { ArrayFilterMutationCore, CheckMutation } from './index.D';

const arrayFilterMutationCore: ArrayFilterMutationCore = <X extends Array<unknown>>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => unknown, x: CheckMutation<X>): X => {
	const { length } = x;
	if (length > 0) {
		let index = 0 as ArrayIndex<X>;
		const filtered = [];
		while (index < length) {
			if (def(<ArrayValue<X>>x[index], index, x)) {
				index++;
				continue;
			}
			filtered.push(index);
			index++;
		}

		index = filtered.length as ArrayIndex<X>;
		while (--index > -1) {
			x.splice(filtered[index], 1);
		}
	}

	return x;
}

export default arrayFilterMutationCore;
