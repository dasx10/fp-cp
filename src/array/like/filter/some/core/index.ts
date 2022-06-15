import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterSomeCore } from "./index.D";

const arrayLikeFilterSomeCore = (<FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]], X extends ArrayLike<unknown>>(findValues: FindValues, x: X) => {
	const { length } = x;
	switch (length) {
		case 0: return [];
		case 1: {
			const value = x[0];
			let index = 0;
			const stop = findValues.length;
			while (index < stop) {
				if (value === findValues[index]) return [value];
				index++;
			}
			return [];
		};
		default: {
			const findValuesSet = new Set(findValues);
			let value = x[0] as ArrayLikeValue<X>;
			const filtered = findValuesSet.has(value) ? [value] : [];
			let index = 1;
			while (index < length) {
				value = x[index] as ArrayLikeValue<X>;
				if (findValuesSet.has(value)) filtered.push(value);
				index++;
			}
			return filtered;
		}
	}
}) as ArrayLikeFilterSomeCore;

export default arrayLikeFilterSomeCore;
