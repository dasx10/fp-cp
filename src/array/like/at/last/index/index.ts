import type { ArrayLikeAtLastIndex, ArrayLikeAtLastIndexCore } from "./index.D";

const arrayLikeAtLastIndex: ArrayLikeAtLastIndexCore = <X extends ArrayLike<unknown>>({ length }: X): ArrayLikeAtLastIndex<X> => {
	if (length > 0) return length - 1;
}

export default arrayLikeAtLastIndex;
