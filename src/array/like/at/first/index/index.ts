import type { ArrayLikeAtFirstIndexCore } from "./index.D";

const arrayLikeAtFirstIndex: ArrayLikeAtFirstIndexCore = <X extends ArrayLike<unknown>>(x: X): 0 | void => {
	if (x.length > 0) return 0;
}  

export default arrayLikeAtFirstIndex;
