import { ArrayLikeFilterPredicate } from './../../filter/core/index.D';
import { ArrayLikeValue, ArrayLikeIndex } from './../../index.D';
import { Chars }          from './../../../../string/chars/index.D';

// Filter
export type TupleRejectEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	?      [Value] | [Value, ...TupleRejectEver<Next>] | TupleRejectEver<Next>
	: never;
	
	export type TupleReject     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleRejectEver<Next>] | TupleRejectEver<Next>
	: [];

export type ArrayRejectEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [Value] | [Value, ...TupleRejectEver<Next>] | TupleRejectEver<Next>
	: X;

export type ArrayReject     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleRejectEver<Next>] | TupleRejectEver<Next>
	: [] | X;

export type ArrayLikeReject <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [Value, ...TupleRejectEver<Next>] | TupleRejectEver<Next>
	: X extends string
		? ArrayReject<Chars<X>>
		: [] | ArrayLikeValue<X>[];

// Predicate
export type	ArrayLikeRejectPredicate <X extends ArrayLike<unknown>, Predicate> = ArrayLikeFilterPredicate<X, Exclude<ArrayLikeValue<X>, Predicate>>;

export type ArrayLikeRejectCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
	> = {
	<X extends Type, Predicate>
		// @ts-ignore 
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => value is Predicate, x: X) : ArrayLikeRejectPredicate<X, Predicate>;
	
	<X extends Type>                              
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X)    : ArrayLikeReject<X>;
	}
