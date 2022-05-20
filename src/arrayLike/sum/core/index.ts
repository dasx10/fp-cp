import type { ArrayLikeIterator } from "../../index.D";
import type { ArrayLikeSumCore } from "./index.D";

const arrayLikeSumCore: ArrayLikeSumCore = <X>(def: ArrayLikeIterator<X, number>, x: ArrayLike<X>): number => {
  const { length } = x;
	switch (length) {
		case 0  : return 0;
		case 1  : return def(x[0], 0, x);
		default : {
			let sum = def(x[0], 0, x);
			let index = 1;
      while (index < length) {
        sum += def(x[index], index, x);
        index++;
      }
	
      return sum;
		}
	}
}

export default arrayLikeSumCore;
