import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

const arrayLikeProduceCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => INITIAL_VALUE,
  initialValue : INITIAL_VALUE,
  x            : X
) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return [def(initialValue, <ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x)];
		default : {
			const produced = new Array(length);
			let index = 0;
			while (index < length) {
				produced[index] = def(initialValue, <ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x);
				index++;
			}
			return produced;
		}
	}
}

export default arrayLikeProduceCore;
