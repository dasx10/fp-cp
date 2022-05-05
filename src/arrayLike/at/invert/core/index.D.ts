import type { ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtInvert <X extends ArrayLike<any>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtResult<X>
		: undefined;

export type ArrayLikeAtInvertCore = <Index extends number, X extends ArrayLike<any>> (index: ToIndexInvert<Index>, x: X) => ArrayLikeAtInvert<X, Index>
