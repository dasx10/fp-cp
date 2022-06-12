import { ArrayValue } from '../../../index.D';
import type { Chars } from './../../../../string/chars/index.D';
import type { ArrayLikeValue, ArrayLikeIndex } from './../../index.D';


// Filter

export type TupleFilterEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	?      [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: never;
	
	export type TupleFilter     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: [];

export type ArrayFilterEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: X;

export type ArrayFilter     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: X extends readonly []
		? []
		: [] | X;

export type ArrayLikeFilter <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: X extends string
		? ArrayFilter<Chars<X>>
		: X extends readonly []
			? []
			: [] | ArrayLikeValue<X>[];

// Predicate

export type TupleFilterPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : Predicate & ArrayValue<X> extends never ? []
		: X extends readonly [infer Value, ...infer Next]
			? Value extends Predicate
				? [Value & Predicate, ...TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>]
				: Predicate & Value extends never
					? TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
					: Predicate & Value extends Value
						? [Predicate & Value, ...TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>] | TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
						: TupleFilterPredicate<Next, Predicate & ArrayValue<Next>>
	: never;

export type ArrayFilterPredicate <X extends readonly unknown[], Predicate> =
	X extends readonly [] ? [] : X extends readonly [unknown, ...unknown[]]
		? TupleFilterPredicate<X, Predicate>
		: (Predicate & ArrayValue<X>)[]

export type ArrayLikeFilterPredicate <X extends ArrayLike<unknown>, Predicate> = 
	X extends readonly unknown[]
		? ArrayFilterPredicate<X, Predicate>
		: X extends string
			? ArrayFilterPredicate<Chars<X>, Predicate>
			: (Predicate & ArrayLikeValue<X>)[];

// Core

export type ArrayFilterCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = {
	<X extends Type, Predicate>
	  // @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterPredicate<X, Predicate>;

	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeFilter<X>;
}
