import { ArrayLikeIndex, ArrayLikeValue } from "../../../../index.D";


const arrayLikeUniqByRightCore
= (<X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0: return [];
		case 1: return [x[0]];
		case 2: return def(<ArrayLikeValue<X>>x[1], <ArrayLikeIndex<X>>1, x) !== def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) 
			? [x[0], x[1]]
			: [x[0]];

		default: {
			let index    = length - 1 as ArrayLikeIndex<X>;
			let value    = x[index]   as ArrayLikeValue<X>;
			let key      = def(value, index, x);
			const check  = new Set([key]);
			const unique = [value];
			while (--index > -1) {
				value = x[index] as ArrayLikeValue<X>;
				key   = def(value, index, x);
				if (check.has(key)) {
					index++;
					continue;
				}
				check.add(key);
				unique.unshift(value);
			}
			return unique;
		}
	}
});

export default arrayLikeUniqByRightCore;
