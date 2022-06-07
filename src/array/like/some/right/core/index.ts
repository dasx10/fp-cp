import type { ArrayLikeExecutor, ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeSomeRightCore } from "./index.D";

const arrayLikeSomeRightCore: ArrayLikeSomeRightCore = <X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
): boolean => {
	let index = x.length as ArrayLikeIndex<X>;
	while (--index > -1) if (def(<ArrayLikeValue<X>>x[index], index, x)) return true;
	return false;
}

export default arrayLikeSomeRightCore;
