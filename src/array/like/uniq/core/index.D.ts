import type { ArrayLikeValue } from './../../index.D';

export type ArrayLikeUniqCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	X extends Type
>(x: X) => ArrayLikeValue<X>[]
