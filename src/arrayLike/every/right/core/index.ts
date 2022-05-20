import type { ArrayLikeExecutor } from "../../../index.D";

const arrayLikeEveryRightCore = <X extends ArrayLike<unknown>>(def: ArrayLikeExecutor<X>, x: X): boolean => {
  const { length } = x;
	switch (length) {
		case 0  : return false;
		case 1  : return Boolean(def(x[0], 0, x));
		default : {
			let index = length;
      while (--index > -1) {
        if (def(x[index], index, x)) continue;
        return false;
      }
      return true;
		}
	}
}

export default arrayLikeEveryRightCore;
