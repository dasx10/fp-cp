import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeCountCore }             from "./index.D";

const arrayLikeCountCore = (<X extends ArrayLike<unknown>>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X) => {
  const { length } = x;
  switch (length) {
		case 0  : return 0;
		case 1  : return def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? 1 : 0;
		default : {
			let count = def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x) ? 1 : 0;
			let index = 1;
			while (index < length) {
				if (def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x)) count++;
				index++;
			}
		
			return count;
		}
	}
}) as ArrayLikeCountCore;

export default arrayLikeCountCore;
