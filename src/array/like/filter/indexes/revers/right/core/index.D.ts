import { ArrayLikeIndex, ArrayLikeValue } from "../../../../../index.D";
import type { ArrayLikeFilterIndexesRevers, ArrayLikeFilterIndexesReversPredicate } from "../../core/index.D";

export type ArrayLikeFilterIndexesReversRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterIndexesReversPredicate<X, Predicate>;
	
	<X extends Type> (
		def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
		x   : X
	): ArrayLikeFilterIndexesRevers<X>
}
