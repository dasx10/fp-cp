import type { ArrayLikeExecutor, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeSomeRightCore } from "./index.D";

const arrayLikeSomeRightCore: ArrayLikeSomeRightCore = <X extends ArrayLike<unknown>>(def: ArrayLikeExecutor<X>, x: X): boolean => {
	let index = x.length;
	while (--index > -1) if (def(<ArrayLikeValue<X>>x[index], index, x)) return true;
	return false;
}

export default arrayLikeSomeRightCore;
