import type { ArrayLikeValue } from "../../../index.D";

export type ArrayLikeIndexOfCore <
	Type extends ArrayLike<unknown> = ArrayLike<unknown>
> = <X extends Type>(value: ArrayLikeValue<X>, x: X) => number;
