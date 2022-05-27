import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeSumRightCore }          from "./index.D";

const arrayLikeSumRightCore: ArrayLikeSumRightCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number,
	x   : X
): number => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(<ArrayLikeValue<X>>x[0],< ArrayLikeIndex<X>>0, x);
		default : {
			let index = length - 1 as ArrayLikeIndex<X>;
			let sum   = def(<ArrayLikeValue<X>>x[index], index, x);
			while (--index > -1) sum += def(<ArrayLikeValue<X>>x[index], index, x);
			return sum;
		}
	}
}

export default arrayLikeSumRightCore;
