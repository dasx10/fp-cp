import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeJoinBy <Result, X extends ArrayLike<unknown>> = 
	string;

export type ArrayLikeJoinByCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <X extends Type, Result>(
	def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result,
	x  : X
) => ArrayLikeJoinBy<Result, X>
