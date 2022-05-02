import type { ArrayLikeIncludeCore } from "./index.D";

const arrayLikeIncludeCore: ArrayLikeIncludeCore = <Value>(value: Value, x: ArrayLike<Value>): boolean => {
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			if (x[index] === value) return true;
			index++;
		}
	}

	return false;
}

export default arrayLikeIncludeCore;
