import type { ArrayLikeIndex, ArrayLikeValue }          from "../../../index.D";
import type { ArrayLikeCount, ArrayLikeCountPredicate } from "../../core/index.D";

export type ArrayLikeCountRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>(
		// @ts-ignore 
		def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate,
		x: X
	): ArrayLikeCountPredicate<X, Predicate>;

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeCount<X>;
}
