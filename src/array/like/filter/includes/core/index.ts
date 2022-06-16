import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterIncludesCore } from "./index.D";

const arrayLikeFilterIncludesCore = (<FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]], X extends ArrayLike<unknown>>(findValues: FindValues, x: X) => {
	const { length } = x;
	switch (length) {
		case 0: return [];
		case 1: {
			const stop = findValues.length;
			switch (stop) {
				case 0: return [];
				case 1: {
					const value = x[0];
					return value === findValues[0] ? [value] : [];
				}
				default: {
					let index = 0;
					const value = x[0];
					const filtered = value === findValues[0] ? [value] : [];
					while (index < stop) {
						if (value === findValues[index]) return [value];
						index++;
					}
					return filtered;
				}
			}
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
}) as ArrayLikeFilterIncludesCore;

export default arrayLikeFilterIncludesCore;
