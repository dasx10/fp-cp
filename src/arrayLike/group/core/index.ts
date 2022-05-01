import type { ArrayLikeIterator } from "../../index.D";
import type { ArrayLikeGroupCore } from "./index.D";

const arrayLikeGroupCore: ArrayLikeGroupCore = <X, Key extends PropertyKey>(def: ArrayLikeIterator<X, Key>, x: ArrayLike<X>): Record<Key, X> => {
	const group = Object.create(null);
	const { length } = x;
	if (length > 0) {
		let index = 0;
		while (index < length) {
			const value = x[index];
			group[def(value, index, x)] = value;
			index++;
		}
	}
	return group;
}

export default arrayLikeGroupCore;
