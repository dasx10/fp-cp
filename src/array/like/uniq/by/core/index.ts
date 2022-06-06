import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeUniqByCore } from "./index.D";

const arrayLikeUniqByCore: ArrayLikeUniqByCore
= (<X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0: return [];
		case 1: return [x[0]];
		case 2: return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) !== def(<ArrayLikeValue<X>>x[1], <ArrayLikeIndex<X>>1, x) 
			? [x[0], x[1]]
			: [x[0]];

		default: {
			let value    = x[0] as ArrayLikeValue<X>;
			let key      = def(value, <ArrayLikeIndex<X>>0, x);
			const check  = new Set([key]);
			const unique = [value];
			let index    = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				value = x[index] as ArrayLikeValue<X>;
				key = def(value, index, x);
				if (check.has(key)) {
					index++;
					continue;
				}
				check.add(key);
				unique.push(value);
				index++;
			}
			return unique;
		}
	}
}) as ArrayLikeUniqByCore

export default arrayLikeUniqByCore;
