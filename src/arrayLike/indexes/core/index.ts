import type { ArrayLikeIndexes, ArrayLikeIndexesCore } from "./index.D";

const arrayLikeIndexesCore: ArrayLikeIndexesCore = <X extends ArrayLike<unknown>>(x: X) => {
	if (x) {	
		const { length } = x;
		if (length > 0) return Array.from({ length: length }, (_, index) => index) as ArrayLikeIndexes<X>;
	}
  return [] as ArrayLikeIndexes<X>;
}

export default arrayLikeIndexesCore;
