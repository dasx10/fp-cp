import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeCountCore }             from "./index.D";

const arrayLikeCountCore: ArrayLikeCountCore = <X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any, x: X) => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(x[0], 0, x) ? 1 : 0;
		default : {
			let count = def(x[0], 0, x) ? 1 : 0;
			let index = 1;
			while (index < length) {
				if (def(x[index], index, x)) count++;
				index++;
			}
		
			return count;
		}
	}
}

export default arrayLikeCountCore;
