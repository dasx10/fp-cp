import arrayLikeCountValueBase from "../../value/base/index";
import type { ArrayLikeValue } from "../../../index.D";

const arrayLikeCountValuesCore = <FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]], X extends ArrayLike<unknown>>(findValues: FindValues, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return 0;
		case 1  : return arrayLikeCountValueBase(x[0], findValues);
		default : {
			let count = arrayLikeCountValueBase(x[0], findValues);
			let index = 1;
			while (index < length) {
				count += arrayLikeCountValueBase(x[index], findValues);
				index++;
			}
			return count;
		}
	}
}

export default arrayLikeCountValuesCore;
