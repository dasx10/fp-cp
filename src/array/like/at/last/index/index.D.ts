import type { Chars } from "../../../../../string/chars/index.D";

export type ArrayLikeAtLastIndex <X extends ArrayLike<unknown>> = X extends readonly [...infer Next, unknown]
	? Next['length']
	: X extends string
		? ArrayLikeAtLastIndex<Chars<X>>
		: X extends readonly []
			? void
			: number | void;

export type ArrayLikeAtLastIndexCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(x: X) => ArrayLikeAtLastIndex<X>;
