import { Chars } from './../../../../string/chars/index.D';
import type { ArrayLikeIndex } from './../../index.D';
import type { ArrayLikeValue } from "../../index.D";
import { ArrayValue } from '../../../index.D';


// Filter
export type ArrayLikeFind <X extends ArrayLike<unknown>> = X extends readonly []
	? void
	: X extends ''
		? void
		: ArrayLikeValue<X> | void;

// Predicate

export type TupleFilterPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? Value
				: Predicate & Value extends never
					? TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? Predicate & Value | void | TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFindPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterPredicate<X, Predicate>
		: (Predicate & ArrayValue<X>) | void;


export type ArrayLikeFindPredicate<X extends ArrayLike<unknown>, Predicate> = X extends readonly unknown[]
		? ArrayFindPredicate<X, Predicate>
		: X extends string
			? ArrayFindPredicate<Chars<X>, Predicate>
			: (Predicate & ArrayLikeValue<X>) | void;

export type ArrayLikeFindCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeFindPredicate<X, Predicate>;
	<X extends Type>           (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeFind<X>;
}
