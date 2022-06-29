import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import { ArrayLikeJoinByCore } from "./index.D";

const arrayLikeJoinByCore = (<X extends ArrayLike<unknown>> (
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
) => {
	const { length } = x;
	switch (length) {
		case 0  : return '';
		case 1  : return String(def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x));
		default : {
			let joined = String(def(<ArrayLikeValue<X>>x[0], <ArrayLikeIndex<X>>0, x));
			let index  = 1 as ArrayLikeIndex<X>;
			while (index < length) {
				joined += def(<ArrayLikeValue<X>>x[index], <ArrayLikeIndex<X>>index, x)
				index++;
			}
			return joined;
		}
	}
}) as ArrayLikeJoinByCore;

export default arrayLikeJoinByCore;
