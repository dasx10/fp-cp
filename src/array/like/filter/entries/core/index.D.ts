import type { Chars }                          from './../../../../../string/chars/index.D';
import type { ArrayLikeValue, ArrayLikeIndex } from './../../../index.D';

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

export type ArrayLikeFilterEntriesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	<X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown, x: X) => ArrayLikeFilterEntries<X>;
