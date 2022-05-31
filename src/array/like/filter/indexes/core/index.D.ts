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

export type ArrayLikeFilterIndexesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type> (
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown,
	x   : X
) => ArrayLikeFilterIndexes<X>
