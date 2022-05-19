import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import { ArrayLikeAtLastEntry } from "./index.D";

const arrayLikeAtLastEntry: ArrayLikeAtLastEntry = <X extends ArrayLike<any>>(x: X): [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void => {
	const { length } = x;
	if (length > 0) {
		const lastIndex = length - 1;
		return [lastIndex, x[lastIndex]];
	}
}

export default arrayLikeAtLastEntry;
