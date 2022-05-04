import type { ToIndexRight } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtRight <X extends ArrayLike<any>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtResult<X>
		: undefined;

export type ArrayLikeAtRightCore = <Index extends number, X extends ArrayLike<any>> (index: ToIndexRight<Index>, x: X) => ArrayLikeAtRight<X, Index>
