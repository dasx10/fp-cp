import type { ArrayLikeExcludeCore } from "./index.D";

const arrayLikeExcludeCore: ArrayLikeExcludeCore = <Value>(value: Value, x: ArrayLike<Value>): boolean => {
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			if (x[index] === value) return false;
			index++;
		}
	}

	return true;
}

export default arrayLikeExcludeCore;
