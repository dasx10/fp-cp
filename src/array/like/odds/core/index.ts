import { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

const arrayLikeOdds = <
X extends ArrayLike<unknown>
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number, x: X): number => {
	const { length } = x;
	if (length > 1) {
		let value = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		let minimum = value;
		let maximum = value;
		let index = 1;
		while (index < length) {
			value = def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x);;
			if      (value < minimum) minimum = value;
			else if (value > maximum) maximum = value;
			index++;
		}
		return maximum - minimum;
	}
	return 0;
}

export default arrayLikeOdds;
