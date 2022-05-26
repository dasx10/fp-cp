import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeReduceCore } from "./index.D";

const arrayLikeReduceCore: ArrayLikeReduceCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: number, x: X) => INITIAL_VALUE,
  initialValue : INITIAL_VALUE,
  x            : X
) => {
  const { length } = x;
	switch (length) {
		case 0  : return initialValue;
		case 1  : return def(initialValue, x[0], 0, x);
		default : {
			let currentValue = def(initialValue, x[0], 0, x);
			let index = 1;
			while (index < length) {
				currentValue = def(currentValue, x[index], index, x);
				index++;
			}
			return currentValue;
		}
	}
}

export default arrayLikeReduceCore;

