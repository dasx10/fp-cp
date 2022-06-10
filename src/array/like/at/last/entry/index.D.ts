import type { Chars } from "../../../../../string/chars/index.D";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

type ArrayLikeAtLastEntryResult <X extends ArrayLike<unknown>> = [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;

export type ArrayLikeAtLastEntry<X extends ArrayLike<unknown>> = X extends readonly [...infer Firsts, infer Last]
	? [Firsts['length'], Last]
	: X extends string
		? ArrayLikeAtLastEntry<Chars<X>>
		: X extends readonly [] 
			? void
			: ArrayLikeAtLastEntryResult<X>;


export type ArrayLikeAtLastEntryCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLastEntry<X>;
