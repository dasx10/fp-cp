import { ArrayValue } from './../../../../index.D';
import type { Chars }                          from './../../../../../string/chars/index.D';
import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import { Char } from '../../../../../string/char/index.D';


// Filter
type TupleFilterResult<Next extends readonly unknown[], Value> = [[Next['length'], Value]] | [...TupleFilterEntriesEver<Next>, [Next['length'], Value]] | TupleFilterEntriesEver<Next>;

export type TupleFilterEntriesEver <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	?      TupleFilterResult<Next, Value>
	: never;
	
	export type TupleFilterEntries   <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterResult<Next, Value>
	: [];

export type ArrayFilterEntriesEver <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	?      TupleFilterResult<Next, Value>
	: X;

export type ArrayFilterEntries     <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterResult<Next, Value>
	: [] | X;

export type ArrayLikeFilterEntries <X extends ArrayLike<unknown>> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterResult<Next, Value>
	: X extends string
		? ArrayFilterEntries<Chars<X>>
		: [] | ArrayLikeValue<X>[];

// Predicate

export type TupleFilterEntriesPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [...infer Next, infer Value]
			? Value extends Predicate
				? [...TupleFilterEntriesPredicate<Next, Predicate & ArrayValue<Next>>, [Next['length'], Value & Predicate]]
				: Predicate & Value extends never
					? TupleFilterEntriesPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [...TupleFilterEntriesPredicate<Next, Predicate & ArrayValue<Next>>, [Next['length'], Predicate & Value]] | TupleFilterEntriesPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterEntriesPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterEntriesPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterEntriesPredicate<X, Predicate & ArrayValue<X>>
		: (Predicate & ArrayValue<X>)[]

export type ArrayLikeFilterEntriesPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly unknown[]
		? ArrayFilterEntriesPredicate<X, Predicate & ArrayValue<X>>
		: X extends string
			? ArrayFilterEntriesPredicate<Chars<X>, Predicate & Char<X>>
			: (Predicate & ArrayLikeValue<X>)[];

// Core
export type ArrayLikeFilterEntriesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterEntriesPredicate<X, Predicate>;

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X): ArrayLikeFilterEntries<X>;
}
