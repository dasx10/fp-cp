import type { ToIndex } from './../../../index/index.D';
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtRight <X extends ArrayLike<unknown>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtResult<X>
		: ArrayLikeAtResult<X>;

export type ArrayLikeAtRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Index extends number, X extends Type> (index: ToIndex<Index>, x: X) => ArrayLikeAtRight<X, Index>;
