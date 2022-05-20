import type { ArrayLikeIterator } from "../../../index.D";
import type { ArrayLikeSumRightCore } from "./index.D";

const arrayLikeSumRightCore: ArrayLikeSumRightCore = <X>(def: ArrayLikeIterator<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(x[0], 0, x);
		default : {
			let index = length - 1;
			let sum   = def(x[index], index, x);
			while (--index > -1) sum += def(x[index], index, x);
			return sum;
		}
	}
}

export default arrayLikeSumRightCore;
