import type { ArrayLikeValue, ArrayLikeIndex } from './../../index.D';
import type { ArrayLikeEveryCore }             from "./index.D";

const arrayLikeEveryCore: ArrayLikeEveryCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
): boolean => {
  const { length } = x;
	switch (length) {
		case 0  : return false;
		case 1  : return Boolean(def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x));
		default : {
			let index = 0 as ArrayLikeIndex<X>;
			while (index < length) {
				if (def(<ArrayLikeValue<X>>x[index], index, x)) {
					index++;
					continue;
				}
				return false;
			}
			return true;
		}
	}
}

export default arrayLikeEveryCore;
