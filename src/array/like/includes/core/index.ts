import type { ArrayLikeIncludesCore } from "./index.D";

const arrayLikeIncludesCore = (<Value>(value: Value, x: ArrayLike<Value>): boolean => {
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			if (x[index] === value) return true;
			index++;
		}
	}
	return false;
}) as ArrayLikeIncludesCore;

export default arrayLikeIncludesCore;
