import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeMap } from "../../core/index.D";

export type ArrayLikeMapReversCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = 
	<X extends Type, Result>(
		def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
		x   : X
	) => ArrayLikeMap<Result, X>;
