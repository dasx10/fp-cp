import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeAtRandomEntryCore }     from "./index.D";

const arrayLikeAtRandomEntryCore: ArrayLikeAtRandomEntryCore = <X extends ArrayLike<unknown>>(x: X): [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void => {
	const { length } = x;
	switch (length) {
		case 0  : return;
		case 1  : return [0, x[0]];
		default : {
			const index = ~~(Math.random() * length)
			return [index, x[index]];
		}
	}
}

export default arrayLikeAtRandomEntryCore;
