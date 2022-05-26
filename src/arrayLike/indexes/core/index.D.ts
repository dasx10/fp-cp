import type { Chars }          from './../../../../backup/_string/chars/index.D';
import type { ToIndexDirect }  from './../../index/index.D';
import type { ArrayLikeIndex } from '../../index.D';

export type TupleIndexes <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
? [...TupleIndexes<Next>, Next['length']]
: []

export type ArrayIndexes <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next]
	? [...TupleIndexes<Next>, Next['length']]
	: ToIndexDirect<number>[] | []

export type StringIndexes <X extends string> = ArrayIndexes<Chars<X>>

export type ArrayLikeIndexes <X extends ArrayLike<unknown>> = X extends readonly [unknown, ...infer Next]
	? [...TupleIndexes<Next>, Next['length']]
	: X extends string
		? StringIndexes<X>
		: ArrayLikeIndex<X>[] | [];

export type ArrayLikeIndexesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeIndexes<X>;
