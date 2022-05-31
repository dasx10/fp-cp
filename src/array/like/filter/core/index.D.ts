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
	: [] | X;

export type ArrayLikeFilter <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
	: X extends string
		? ArrayFilter<Chars<X>>
		: [] | ArrayLikeValue<X>[];

// Predicate

export type TupleFilterPredicate <X extends readonly unknown[], Predicate> = X extends readonly [infer Value, ...infer Next]
	? Value extends Predicate 
		? [Value, ...TupleFilterPredicate<Next, Predicate>]
		: TupleFilterPredicate<Next, Predicate>
	: [];

export type ArrayFilterPredicate <X extends readonly unknown[], Predicate> = X extends readonly [infer Value, ...infer Next]
	? Value extends Predicate 
		? [Value, ...TupleFilterPredicate<Next, Predicate>]
		: TupleFilterPredicate<Next, Predicate>
	: (Predicate & ArrayLikeValue<X>)[];

export type ArrayLikeFilterPredicate <X extends ArrayLike<unknown>, Predicate> = X extends readonly [infer Value, ...infer Next]
	? Value extends Predicate 
		? [Value, ...TupleFilterPredicate<Next, Predicate>]
		: TupleFilterPredicate<Next, Predicate>
	: (X & Predicate) extends string
	  // @ts-ignore
		? ArrayFilterPredicate<Chars<X>, Predicate>
		: (ArrayLikeValue<X> & Predicate)[];


// Core

export type ArrayFilterCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = {
	<X extends Type, Predicate>
	  // @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeFilterPredicate<X, Predicate & ArrayLikeValue<X>>;

	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeFilter<X>;
}
