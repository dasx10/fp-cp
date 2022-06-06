import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeReduceCore } from "./index.D";

const arrayLikeReduceCore: ArrayLikeReduceCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => INITIAL_VALUE,
  initialValue : INITIAL_VALUE,
  x            : X
) => {
  const { length } = x;
	switch (length) {
		case 0  : return initialValue;
		case 1  : return def(initialValue, <ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		default : {
			let currentValue = def(initialValue, <ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
			let index = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				currentValue = def(currentValue, <ArrayLikeValue<X>>x[index], index, x);
				index++;
			}
			return currentValue;
		}
	}
}

export default arrayLikeReduceCore;

