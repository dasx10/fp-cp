import { ArrayIndex, ArrayValue } from './../../../../index.D';
import { Chars } from './../../../../../string/chars/index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeFindIndex<X extends ArrayLike<unknown>> = X extends readonly []
	? -1
	: X extends ''
		? -1
		: ArrayLikeIndex<X> | -1;

export type TupleFilterPredicate <X extends readonly unknown[], Predicate, CurrentIndex = -1> =
	X extends readonly [] 
		? CurrentIndex 
		: Predicate & ArrayValue<X> extends never 
			? CurrentIndex
			: X extends readonly [...infer Next, infer Value]
				? Value extends Predicate
					? TupleFilterPredicate<Next, Predicate & ArrayValue<Next>, Next['length']>
					: Predicate & Value extends never
						? TupleFilterPredicate<Next, Predicate & ArrayValue<Next>, CurrentIndex>
						: Predicate & Value extends Value
							? TupleFilterPredicate<Next, Predicate & ArrayValue<Next>, CurrentIndex | Next['length']>
							: TupleFilterPredicate<Next, Predicate & ArrayValue<Next>, CurrentIndex>
	: never;
	
export type ArrayFindPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] 
		? -1 
		: X extends readonly [unknown, ...unknown[]]
			? TupleFilterPredicate<X, Predicate>
			: ArrayIndex<X> | -1;

export type ArrayLikeFindIndexPredicate<X extends ArrayLike<unknown>, Predicate> = X extends readonly unknown[]
? ArrayFindPredicate<X, Predicate>
: X extends string
	? ArrayFindPredicate<Chars<X>, Predicate>
	: ArrayLikeIndex<X> | -1;

export type ArrayLikeFindIndexCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	// @ts-ignore
	<X extends Type, Predicate>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate, x: X): ArrayLikeFindIndexPredicate<X, Predicate>;
	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X): ArrayLikeFindIndex<X>;
}
