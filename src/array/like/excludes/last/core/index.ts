import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeExcludesLastCore } from "./index.D";

const arrayLikeExcludesLastCore = (<X extends ArrayLike<unknown>>(value: ArrayLikeValue<X>, x: X): boolean => {
	const { length } = x;
	switch (length) {
		case 0  : return true;
		case 1  : return x[0] !== value;
		default : {
			let index = length;
			while (--index > -1) if (x[index] === value) return false;
			return true;
		}
	}
}) as ArrayLikeExcludesLastCore;

export default arrayLikeExcludesLastCore;
