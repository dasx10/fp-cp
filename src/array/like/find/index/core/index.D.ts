import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeFindIndex<X extends ArrayLike<unknown>> = X extends readonly []
	? -1
	: X extends ''
		? -1
		: ArrayLikeIndex<X> | -1;

export type ArrayLikeFindIndexCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown, x: X) => ArrayLikeFindIndex<X>;
