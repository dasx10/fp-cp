import type { ArrayLikeAtFirstEntryCore } from "./index.D";

const arrayLikeAtFirstEntry: ArrayLikeAtFirstEntryCore = <X extends ArrayLike<unknown>>(x: X): [0, X[0]] | void => {
	if (x.length > 0) return [0, x[0]];
}

export default arrayLikeAtFirstEntry;
