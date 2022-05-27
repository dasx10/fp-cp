import type { ArrayValue, ArrayIndex } from './../../index.D';

export type ArrayFilterCore <Type = unknown> = <X extends readonly Type[]>(def: (value: ArrayValue<X>, index: ArrayIndex<X>, array: X) => unknown, array: X) => ArrayFilter<X> 

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
