import type { ArrayLikeAtLastIndexCore } from "./index.D";

const arrayLikeAtLastIndexCore = (<X extends ArrayLike<unknown>>({ length }: X) => {
	if (length > 0) return length - 1;
}) as ArrayLikeAtLastIndexCore;

export default arrayLikeAtLastIndexCore;
