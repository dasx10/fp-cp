import type { ArrayLikeValue, ArrayLikeIndex }   from './../../index.D';
import type { ArrayFilterCore, ArrayLikeFilter } from './index.D';

const arrayLikeFilterCore: ArrayFilterCore = <
	X extends ArrayLike<unknown>
> (
	def   : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
	array : X
): ArrayLikeFilter<X> => {
	const { length } = array;
	switch (length) {
		case 0  : return [] as ArrayLikeFilter<X>;
		case 1  : {
			const value = array[0];
			return (def(<ArrayLikeValue<X>>value, <ArrayLikeIndex<X>>0, array) ? [value] : []) as ArrayLikeFilter<X>;
		};

		default : {
			let value = array[0] as ArrayLikeValue<X>;
			const filtered = def(value, <ArrayLikeIndex<X>>0, array) ? [value] : [];
			let index = 1 as unknown as ArrayLikeIndex<X>;
			while (index < length) {
				value = array[index] as ArrayLikeValue<X>;
				if (def(value, index, array)) filtered.push(value);
				index++;
			}
			return filtered as ArrayLikeFilter<X>;
		};
	};
};

export default arrayLikeFilterCore;
