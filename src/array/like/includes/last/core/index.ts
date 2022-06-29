import type { ArrayLikeIncludesLastCore } from "./index.D";

const arrayLikeIncludesRightCore = (<Value>(value: Value, x: ArrayLike<Value>): boolean => {
	const { length } = x;
	if (length > 0) {
		let index = length;
		while (--index < length) if (x[index] === value) return true;
	}
	return false;
}) as ArrayLikeIncludesLastCore;

export default arrayLikeIncludesRightCore;
