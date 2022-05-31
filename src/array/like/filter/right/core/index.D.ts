import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilter }                from "../../core/index.D";

export type ArrayLikeFilterRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	X extends Type
>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, array: X) => unknown, x: X) => ArrayLikeFilter<X>  
