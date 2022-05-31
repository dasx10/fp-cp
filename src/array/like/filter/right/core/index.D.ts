import type { ArrayLikeIndex, ArrayLikeValue }            from "../../../index.D";
import type { ArrayLikeFilter, ArrayLikeFilterPredicate } from "../../core/index.D";

export type ArrayLikeFilterRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	  // @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterPredicate<X, Predicate>;

	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeFilter<X>;
}
