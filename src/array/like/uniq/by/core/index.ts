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
			const check  = new Set([def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x)]);
			const unique = [x[0]];
			let index    = 1;
			while (index < length) {
				const key = def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x);
				if (check.has(key)) {
					index++;
					continue;
				}
				check.add(key);
				unique.push(x[index]);
				index++;
			}
			return unique;
		}
	}
}) as ArrayLikeUniqByCore

export default arrayLikeUniqByCore;
