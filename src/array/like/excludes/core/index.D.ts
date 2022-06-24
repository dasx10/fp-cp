import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeExcludes <X extends ArrayLike<unknown>> = X extends readonly []
	? false
	: X extends ''
		? false
		: boolean;

export type ArrayLikeExcludesCore = <X extends ArrayLike<unknown>>(value: ArrayLikeValue<X>, x: X) => ArrayLikeExcludes<X>;
