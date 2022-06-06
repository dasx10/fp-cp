import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';

const arrayLikeFindMinimumCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number,
	x   : X 
) => {
	const { length } = x;
	if (length > 0) {
		let value        = x[0] as ArrayLikeValue<X>;
		let minimum      = def(value, <ArrayLikeIndex<X>>0, x);
		let step         = minimum;
		let minimumValue = value;
		let index        = 1 as ArrayLikeIndex<X>;
		while (index < length) {
			value = x[index] as ArrayLikeValue<X>;
			step  = def(value, index, x)
			if (step < minimum) {
				minimum      = step;
				minimumValue = value;
			}
			index++;
		}
		return minimumValue;
	}
}

export default arrayLikeFindMinimumCore;
