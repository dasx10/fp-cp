import type { ArrayLikeAtLastEntry, ArrayLikeAtLastEntryCore } from "./index.D";

const arrayLikeAtLastEntry: ArrayLikeAtLastEntryCore = <X extends ArrayLike<unknown>>(x: X): ArrayLikeAtLastEntry<X> => {
	const { length } = x;
	if (length > 0) {
		const lastIndex = length - 1;
		return [lastIndex, x[lastIndex]] as ArrayLikeAtLastEntry<X>;
	}
}

export default arrayLikeAtLastEntry;
