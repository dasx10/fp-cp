import type { Chars }                          from './../../../../../../string/chars/index.D';
import type { ArrayValue }                     from '../../../../../index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from '../../../../index.D';

export type TupleIndexesRevers     <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [Next['length'], ...TupleIndexesRevers<Next>] | TupleIndexesRevers<Next>
	: [];

export type ArrayIndexesRevers     <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [Next['length'], ...TupleIndexesRevers<Next>] | TupleIndexesRevers<Next>
	: [] | number[];

export type ArrayLikeFilterIndexesRevers <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [Next['length'], ...TupleIndexesRevers<Next>] | TupleIndexesRevers<Next>
	: X extends string
		? ArrayIndexesRevers<Chars<X>>
		: [] | ArrayLikeIndex<X>[];


// Predicate

export type TupleFilterIndexesReversPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [Next['length'], ...TupleFilterIndexesReversPredicate<Next, Predicate & ArrayValue<Next>>]
				: Predicate & Value extends never
					? TupleFilterIndexesReversPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [Next['length'], ...TupleFilterIndexesReversPredicate<Next, Predicate & ArrayValue<Next>>] | TupleFilterIndexesReversPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterIndexesReversPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterIndexesPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterIndexesReversPredicate<X, Predicate>
		: (Predicate & ArrayValue<X>)[]

export type ArrayLikeFilterIndexesReversPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly unknown[]
		? ArrayFilterIndexesPredicate<X, Predicate>
		: X extends string
			? ArrayFilterIndexesPredicate<Chars<X>, Predicate>
			: (Predicate & ArrayLikeValue<X>)[];

// core

export type ArrayLikeFilterIndexesReversCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterIndexesReversPredicate<X, Predicate>;
	
	<X extends Type> (
		def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
		x   : X
	): ArrayLikeFilterIndexesRevers<X>
}
