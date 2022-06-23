import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeMapCore } from "./index.D";

const arrayLikeMapCore = (<X extends ArrayLike<unknown>, Result>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0  : return [];
		case 1  : return [def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x)];
		// @ts-ignore
		default : return Array.from(x, def);
	}
}) as ArrayLikeMapCore;

export default arrayLikeMapCore;
