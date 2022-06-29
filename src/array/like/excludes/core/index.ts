import type { ArrayLikeValue }        from "../../index.D";
import type { ArrayLikeExcludesCore } from "./index.D";

const arrayLikeExcludesCore = (<X extends ArrayLike<unknown>>(value: ArrayLikeValue<X>, x: X): boolean => {
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
}) as ArrayLikeExcludesCore;

export default arrayLikeExcludesCore;
