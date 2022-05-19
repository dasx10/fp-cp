import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeAverageRightCore } from "./index.D";

const arrayLikeAverageRightCore: ArrayLikeAverageRightCore = <X extends ArrayLike<any>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number, x: X) => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(x[0], 0, x);
		default : {
			let index = length;
			let sum   = 0;
			while (--index > -1) sum += def(x[index], index, x);
			return sum / length;
		}
	}
}

export default arrayLikeAverageRightCore;
