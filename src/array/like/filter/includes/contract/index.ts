// dependencies
import arrayLikeFilterIncludesCore from '../core/index';

// interfaces
import type { __ }             from '../../../../../index';
import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterIncludesDef } from './index.D';

const symbolPlaceholder = Symbol.for('placeholder');

const arrayLikeFilterIncludesDef = (function <
	FindValues extends readonly ArrayLikeValue<X>[],
	X          extends ArrayLike<unknown>
> (findValues: FindValues|__, x?:X) {
	switch (arguments.length) {
		case 1: {
			switch (findValues.length) {
				case 0: <X extends ArrayLike<unknown>>(x: X) => [];
				case 1: <X extends ArrayLike<unknown>>(x: X) => {
					const value = x[0];
					// @ts-ignore
					return value === findValues[0] ? [value] : [];
				};
				default: {
					return <X extends ArrayLike<unknown>>(x: X) => {
						const { length } = x;
						switch (length) {
							case 0: return [];
							case 1: {
								const value = x[0] as ArrayLikeValue<X>;
								// @ts-ignore
								return findValues.includes(value) ? [value] : [];
							};
							default: {
								// @ts-ignore
								const findValuesSet = new Set<ArrayLikeValue<X>>(<FindValues>findValues);
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
			}
		}

		default: {
			// @ts-ignore
			if (findValues[symbolPlaceholder]) return <FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]]>(findValues: FindValues) => arrayLikeFilterIncludesCore(findValues, x);
			return arrayLikeFilterIncludesCore(<FindValues>findValues, <X>x);
		}
	}
}) as ArrayLikeFilterIncludesDef;

export default arrayLikeFilterIncludesDef;
