import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeSumCore }               from "./index.D";

const arrayLikeSumCore: ArrayLikeSumCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number,
	x   : X
): number => {
  const { length } = x;
	switch (length) {
		case 0  : return 0;
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
		default : {
			let sum = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x);
			let index = 1 as ArrayLikeIndex<X>;
      while (index < length) {
        sum += def(<ArrayLikeValue<X>>x[index], index, x);
        index++;
      }
	
      return sum;
		}
	}
}

export default arrayLikeSumCore;
