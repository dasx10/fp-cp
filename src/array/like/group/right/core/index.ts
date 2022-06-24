import { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import { ArrayLikeGroup } from "../../core/index.D";
import { ArrayLikeGroupRightCore } from "./index.D";

const arrayLikeGroupRightCore: ArrayLikeGroupRightCore = <
	X   extends ArrayLike<unknown>,
	Key extends PropertyKey
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Key, x: X): ArrayLikeGroup<Key, X> => {
	const group = Object.create(null);
	const { length } = x;
	if (length > 0) {
		let index = length;
		let value;
		while (--index > -1) {
			value = x[index] as ArrayLikeValue<X>;
			group[def(value, <ArrayLikeIndex<X>>index, x)] = value;
		}
	}
	return group;
}

export default arrayLikeGroupRightCore;
