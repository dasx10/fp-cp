import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';
import type { Chars }                          from './../../../../../string/chars/index.D';

export type TupleFilterReverseEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	?      [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: never;
	
	export type TupleFilterReverse     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: [];

export type ArrayFilterReverseEver <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: X;

export type ArrayFilterReverse     <X extends readonly unknown[]> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: [] | X;

export type ArrayLikeFilterReverse <X extends ArrayLike<unknown>> = X extends readonly [infer Value, ...infer Next]
	? [] | [Value] | [...TupleFilterReverseEver<Next>, Value] | TupleFilterReverseEver<Next>
	: X extends string
		? ArrayFilterReverse<Chars<X>>
		: [] | ArrayLikeValue<X>[]

export type ArrayFilterReverseCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = <
	X extends Type
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X) => ArrayLikeFilterReverse<X> 
