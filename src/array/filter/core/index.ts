import type { ArrayValue, ArrayIndex }       from './../../index.D';
import type { ArrayFilter, ArrayFilterCore } from './index.D';

const arrayFilterCore: ArrayFilterCore = <
	X extends readonly unknown[]
> (
	def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => unknown,
	array: X
): ArrayFilter<X> => {
	const { length } = array;
	switch (length) {
		case 0  : return [] as ArrayFilter<X>;
		case 1  : {
			const [value] = array;
			return (def(<ArrayValue<X>>value, <ArrayIndex<X>>0, array) ? [value] : []) as ArrayFilter<X>;
		};

		default : {
			let value = array[0] as ArrayValue<X>;
			const filtered = def(value, <ArrayIndex<X>>0, array) ? [value] : [];
			let index = 1 as unknown as ArrayIndex<X>;
			while (index < length) {
				value = array[index] as ArrayValue<X>;
				if (def(value, index, array)) filtered.push(value);
				index++;
			}
			return filtered as ArrayFilter<X>;
		};
	};
};

export default arrayFilterCore;
