import type { Chars }                             from './../../../../backup/_string/chars/index.D';
import type { TupleFilterEver, ArrayFilterEver }  from './../../../array/filter/core/index.D';
import type { ArrayLikeExecutor, ArrayLikeValue } from "../../index.D"

export type ArrayLikeGroup <Key extends PropertyKey, X extends ArrayLike<unknown>> = Record<
	Key,
	X extends readonly [infer Value, ...infer Next]
		? [Value] | [Value, ...TupleFilterEver<Next>] | TupleFilterEver<Next>
		: X extends string 
			? ArrayFilterEver<Chars<X>>
			: ArrayLikeValue<X>[]>;

export type ArrayLikeGroupCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	X   extends Type,
	Key extends PropertyKey
>(def: ArrayLikeExecutor<X, Key>, x: X) => ArrayLikeGroup<Key, X>;
