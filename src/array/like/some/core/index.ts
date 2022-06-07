import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeSomeCore } from "./index.D";

const arrayLikeSomeCore: ArrayLikeSomeCore = <X extends ArrayLike<unknown>>(
	def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown,
	x  : X
) => {
  const { length } = x;
	switch (length) {
		case 0  : return false;
		case 1  : return Boolean(def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x));
		default : {
			let index = 0 as ArrayLikeIndex<X>;
			while (index < length) {
				if (def(<ArrayLikeValue<X>>x[index], index, x)) return true;
				index++;
			}
			return false;
		}
	}
}

export default arrayLikeSomeCore;
