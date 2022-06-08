import type { ArrayLikeIndex, ArrayLikeValue } from '../../../../../index.D';
import type { ArrayLikeFilterEntriesRevers, ArrayLikeFilterEntriesReversPredicate } from '../../core/index.D';

export type ArrayLikeFilterEntriesReversRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterEntriesReversPredicate<X, Predicate>;

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X): ArrayLikeFilterEntriesRevers<X>;
}
