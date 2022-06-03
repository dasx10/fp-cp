import { ArrayValue } from './../../../../../../backup/array/index.D';
import type { Chars } from './../../../../../string/chars/index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type TupleIndexes           <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [...TupleIndexes<Next>, Next['length']] | TupleIndexes<Next>
	: [];

export type ArrayIndexes           <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [...TupleIndexes<Next>, Next['length']] | TupleIndexes<Next>
	: [] | number[];

export type ArrayLikeFilterIndexes <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next]
	? [] | [Next['length']] | [...TupleIndexes<Next>, Next['length']] | TupleIndexes<Next>
	: X extends string
		? ArrayIndexes<Chars<X>>
		: [] | ArrayLikeIndex<X>[];


// Predicate

export type TupleFilterIndexesPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [...TupleFilterIndexesPredicate<Next, Predicate & ArrayValue<Next>>, Next['length']]
				: Predicate & Value extends never
					? TupleFilterIndexesPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [...TupleFilterIndexesPredicate<Next, Predicate & ArrayValue<Next>>, Next['length']] | TupleFilterIndexesPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterIndexesPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterIndexesPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterIndexesPredicate<X, Predicate>
		: (Predicate & ArrayValue<X>)[]

export type ArrayLikeFilterIndexesPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly unknown[]
		? ArrayFilterIndexesPredicate<X, Predicate>
		: X extends string
			? ArrayFilterIndexesPredicate<Chars<X>, Predicate>
			: (Predicate & ArrayLikeValue<X>)[];

// core

export type ArrayLikeFilterIndexesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterIndexesPredicate<X, Predicate>;
	
	<X extends Type> (
		def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
		x   : X
	): ArrayLikeFilterIndexes<X>
}
