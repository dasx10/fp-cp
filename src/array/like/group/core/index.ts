import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeGroup, ArrayLikeGroupCore } from "./index.D";

const arrayLikeGroupCore: ArrayLikeGroupCore = <
	X   extends ArrayLike<unknown>,
	Key extends PropertyKey
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Key, x: X): ArrayLikeGroup<Key, X> => {
	const group = Object.create(null);
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			const value = x[index] as ArrayLikeValue<X>;
			group[def(value, <ArrayLikeIndex<X>>index, x)] = value;
			index++;
		}
	}
	return group;
}

export default arrayLikeGroupCore;
