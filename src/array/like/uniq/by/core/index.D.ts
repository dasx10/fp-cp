import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeUniqByCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> =
<X extends Type>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
) => ArrayLikeValue<X>[];
