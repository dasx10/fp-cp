import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';

const arrayLikeFindMaximumCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number,
	x   : X 
) => {
	const { length } = x;
	if (length > 0) {
		let value        = x[0] as ArrayLikeValue<X>;
		let maximum      = def(value, <ArrayLikeIndex<X>>0, x);
		let step         = maximum;
		let maximumValue = value;
		let index        = 1 as ArrayLikeIndex<X>;
		while (index < length) {
			value = x[index] as ArrayLikeValue<X>;
			step  = def(value, index, x)
			if (step > maximum) {
				maximum      = step;
				maximumValue = value;
			}
			index++;
		}
		return maximumValue;
	}
}

export default arrayLikeFindMaximumCore;
