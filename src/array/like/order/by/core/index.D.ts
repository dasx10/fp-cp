import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeSort } from "../../../sort/core/index.D";

export type ArrayLikeOrderBy <X extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSort<X>;


export type ArrayLikeOrderByCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type>(
	def: (value: ArrayLikeValue<X>) => unknown,
	x  : X
) => ArrayLikeOrderBy<X>;
