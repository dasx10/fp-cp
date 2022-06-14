import type { __ }             from './../../../../../index';
import type { ArrayLikeValue } from "../../../index.D";

import arrayLikeFilterSomeCore from '../core/index';

const symbolPlaceholder = Symbol.for('placeholder');

const arrayLikeFilterSomeDef = function <
	FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]],
	X extends ArrayLike<unknown>
> (findValues: FindValues|__, x?:X) {
	switch (arguments.length) {
		case 1: {
			const findValuesSet = new Set<ArrayLikeValue<X>>(<FindValues>findValues);
			return <X extends ArrayLike<unknown>>(x: X) => {
				const { length } = x;
				switch (length) {
					case 0: return [];
					case 1: {
						const value = x[0] as ArrayLikeValue<X>;
						// @ts-ignore
						return findValuesSet.has(value) ? [value] : [];
					};
					default: {
						let value = x[0] as ArrayLikeValue<X>;
						// @ts-ignore
						const filtered = findValuesSet.has(value) ? [value] : [];
						let index = 1;
						while (index < length) {
							value = x[index] as ArrayLikeValue<X>;
							// @ts-ignore
							if (findValuesSet.has(value)) filtered.push(value);
							index++;
						}
						return filtered;
					}
				}
			}
		}

		default: {
			// @ts-ignore
			if (findValues[symbolPlaceholder]) return <FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]]>(findValues: FindValues) => arrayLikeFilterSomeCore(findValues, x);
			return arrayLikeFilterSomeCore(<FindValues>findValues, <X>x);
		}
	}
}

export default arrayLikeFilterSomeDef;
