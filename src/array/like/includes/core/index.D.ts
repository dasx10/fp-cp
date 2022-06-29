import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeIncludes <X extends ArrayLike<unknown>> = X extends readonly []
	? false
	: X extends ''
		? false
		: boolean;

export type ArrayLikeIncludesCore <Type extends  ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(value: ArrayLikeValue<X>, x: X) => ArrayLikeIncludes<X>;
