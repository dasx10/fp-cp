import type { ToIndexLeft } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtLeft <X extends ArrayLike<any>, Index extends number> = number extends Index
? ArrayLikeAtResult<X>
: `${Index}` extends `-${number}`
	? undefined
	: ArrayLikeAtResult<X>;
	
export type ArrayLikeAtLeftCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexLeft<Index>, x: X) => ArrayLikeAtLeft<X, Index>;
