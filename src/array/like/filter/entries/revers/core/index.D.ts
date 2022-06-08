import type { Char } from '../../../../../../string/char/index.D';
import type { Chars } from '../../../../../../string/chars/index.D';
import type { ArrayIndex, ArrayValue } from './../../../../../index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from './../../../../index.D';



// Filter
type TupleFilterReversResult<Next extends readonly unknown[], Value> = [[Next['length'], Value]] | [[Next['length'], Value], ...TupleFilterEntriesReversEver<Next>] | TupleFilterEntriesReversEver<Next>;

export type TupleFilterEntriesReversEver <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	?      TupleFilterReversResult<Next, Value>
	: never;
	
	export type TupleFilterEntriesRevers   <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterReversResult<Next, Value>
	: [];

export type ArrayFilterEntriesReversEver <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	?      TupleFilterReversResult<Next, Value>
	:      [ArrayIndex<X>, ArrayValue<X>][];

export type ArrayFilterEntriesRevers     <X extends readonly unknown[]> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterReversResult<Next, Value>
	: [] | [ArrayIndex<X>, ArrayValue<X>][];

export type ArrayLikeFilterEntriesRevers <X extends ArrayLike<unknown>> = X extends readonly [...infer Next, infer Value]
	? [] | TupleFilterReversResult<Next, Value>
	: X extends string
		? ArrayFilterEntriesRevers<Chars<X>>
		: [] | [ArrayLikeIndex<X>, ArrayLikeValue<X>][];

// Predicate

export type TupleFilterEntriesReversPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [...infer Next, infer Value]
			? Value extends Predicate
				? [[Next['length'], Value & Predicate], ...TupleFilterEntriesReversPredicate<Next, Predicate & ArrayValue<Next>>, ]
				: Predicate & Value extends never
					? TupleFilterEntriesReversPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [[Next['length'], Predicate & Value], ...TupleFilterEntriesReversPredicate<Next, Predicate & ArrayValue<Next>>, ] | TupleFilterEntriesReversPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterEntriesReversPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterEntriesReversPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterEntriesReversPredicate<X, Predicate & ArrayValue<X>>
		: [ArrayIndex<X>, (Predicate & ArrayValue<X>)][] | [];

export type ArrayLikeFilterEntriesReversPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly unknown[]
		? ArrayFilterEntriesReversPredicate<X, Predicate & ArrayValue<X>>
		: X extends string
			? ArrayFilterEntriesReversPredicate<Chars<X>, Predicate & Char<X>>
			: [ArrayLikeIndex<X>, (Predicate & ArrayLikeValue<X>)][] | [];

// Core
export type ArrayLikeFilterEntriesReversCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	<X extends Type, Predicate>
	// @ts-ignore 
	(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterEntriesReversPredicate<X, Predicate>;

	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X): ArrayLikeFilterEntriesRevers<X>;
}
