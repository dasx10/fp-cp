import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";

export type ArrayLikeMaximumCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	X extends Type
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => number, x: X) => number;
