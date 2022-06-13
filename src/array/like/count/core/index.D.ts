import type { Chars } from "../../../../string/chars/index.D";
import type { ArrayLikeFilterPredicate } from "../../filter/core/index.D";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";


// Count
export type TupleCount <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? X['length'] | TupleCount<Next>
	: 0;

export type ArrayCount <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? X['length'] | TupleCount<Next>
	: number;

export type ArrayLikeCount <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next]
	? X['length'] | TupleCount<Next>
	: X extends string
		? ArrayCount<Chars<X>>
		: X extends readonly []
			? 0
			: 0 | ArrayLikeIndex<X> | X['length'];

// Predicate
export type ArrayLikeCountPredicate <X extends ArrayLike<unknown>, Predicate> = ArrayLikeFilterPredicate<X, Predicate>['length'];


export type ArrayLikeCountCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>(
		// @ts-ignore 
		def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate,
		x: X
	): ArrayLikeCountPredicate<X, Predicate>;

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeCount<X>;
};
