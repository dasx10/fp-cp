import { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

const arrayLikeScope = <X extends ArrayLike<unknown>, Result extends number>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
	x   : X
): [number, number] => {
	const { length } = x;
	switch (length) {
		case 0: return [-Infinity, Infinity];
		case 1: {
			const value = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
			return [value, value];
		};
		default: {
			let value   = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
			const scope = [value, value] as [number, number];
			let index   = 0;
			while (index < length) {
				value = def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x);
				if      (value < scope[0]) scope[0] = value;
				else if (value > scope[1]) scope[1] = value;
				index++;
			}
			return scope;
		}
	}
}

export default arrayLikeScope;
