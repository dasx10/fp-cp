import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

const arrayLikeEveryRightCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
): boolean => {
  const { length } = x;
	switch (length) {
		case 0  : return false;
		case 1  : return Boolean(def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x));
		default : {
			let index = length as ArrayLikeIndex<X>;
      while (--index > -1) {
        if (def(<ArrayLikeValue<X>>x[index], index, x)) continue;
        return false;
      }
      return true;
		}
	}
}

export default arrayLikeEveryRightCore;
