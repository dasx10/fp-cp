import type { ArrayLikeExecutor } from "../../index.D";
import type { ArrayLikeEveryCore } from "./index.D";

const arrayLikeEveryCore: ArrayLikeEveryCore = <X extends ArrayLike<unknown>>(def: ArrayLikeExecutor<X>, x: X): boolean => {
  const { length } = x;
	switch (length) {
		case 0  : return false;
		case 1  : return Boolean(def(x[0], 0, x));
		default : {
			let index = 0;
			while (index < length) {
				if (def(x[index], index, x)) {
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
