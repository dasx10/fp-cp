// dependencies
import arrayLikeCountOfBase from "../../of/base/index";

// interfaces
import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountIncludesCore } from "./index.D";

const arrayLikeCountIncludesCore = (<FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]], X extends ArrayLike<unknown>>(findValues: FindValues, x: X) => {
	const { length } = x;
	switch (length) {
		case 0  : return 0;
		case 1  : return arrayLikeCountOfBase(<ArrayLikeValue<FindValues>>x[0], findValues);
		default : {
			let count = arrayLikeCountOfBase(<ArrayLikeValue<FindValues>>x[0], findValues);
			let index = 1;
			while (index < length) {
				count+= arrayLikeCountOfBase(<ArrayLikeValue<FindValues>>x[index], findValues);
				index++;
			}
			return count;
		}
	}
}) as ArrayLikeCountIncludesCore;

export default arrayLikeCountIncludesCore;
