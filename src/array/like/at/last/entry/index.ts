import type { ArrayLikeAtLastEntryCore } from "./index.D";

const arrayLikeAtLastEntryCore = (<X extends ArrayLike<unknown>>(x: X) => {
	const { length } = x;
	if (length > 0) {
		const lastIndex = length - 1;
		return [lastIndex, x[lastIndex]];
	}
}) as ArrayLikeAtLastEntryCore;

export default arrayLikeAtLastEntryCore;
