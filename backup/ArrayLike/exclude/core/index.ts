import type { ArrayLikeValue }       from "../../../../src/arrayLike/index.D";
import type { ArrayLikeExcludeCore } from "./index.D";

const arrayLikeExcludeCore: ArrayLikeExcludeCore = <X extends ArrayLike<unknown>>(value: ArrayLikeValue<X>, x: X): boolean => {
	const { length } = x;
	switch (length) {
		case 0  : return true;
		case 1  : return x[0] !== value;
		default : {
			let index = 0;
			while (index < length) {
				if (x[index] === value) return false;
				index++;
			}
			return true;
		}
	}
}

export default arrayLikeExcludeCore;
