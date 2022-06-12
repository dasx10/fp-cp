import type { ArrayLikeFilter, ArrayLikeFilterPredicate } from "../../filter/core/index.D";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

export type ArrayLikeCountCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>(
		// @ts-ignore 
		def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate,
		x: X
	): ArrayLikeFilterPredicate<X, Predicate>['length'];

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeFilter<X>['length'];
};
