import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeUniqCore } from "./index.D";

const arrayLikeUniqCore: ArrayLikeUniqCore = (<X extends ArrayLike<unknown>>(array: X) => {
	const { length } = array;
	switch (length) {
		case 0  : return []                                                        as [];
		case 1  : return [array[0]]                                                as [ArrayLikeValue<X>];
		case 2  : return array[0] !== array[1] ? [array[0], array[1]] : [array[0]] as [ArrayLikeValue<X>] | [ArrayLikeValue<X>, ArrayLikeValue<X>];
		default : {
			const uniq = new Set<ArrayLikeValue<X>>();
			let index = 0;
			while (index < length) {
				uniq.add(array[index] as ArrayLikeValue<X>);
				index++;
			}
			return [...uniq] as ArrayLikeValue<X>[];
		}
	}
}) as ArrayLikeUniqCore;

export default arrayLikeUniqCore;
