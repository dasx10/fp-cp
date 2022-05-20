import type { ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtInvert <X extends ArrayLike<unknown>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtResult<X>
		: undefined;

export type ArrayLikeAtInvertCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Index extends number, X extends Type> (index: ToIndexInvert<Index>, x: X) => ArrayLikeAtInvert<X, Index>
