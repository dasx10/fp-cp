import type { Chars } from './../../../../string/chars/index.D';
import type { ArrayLikeValue, ArrayLikeIndex } from './../../index.D';

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
		: [] | ArrayLikeValue<X>[]

export type ArrayFilterCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = <
	X extends Type
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X) => ArrayLikeFilter<X> 
