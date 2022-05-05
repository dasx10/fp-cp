import type { ToIndexDirect } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

export type ArrayLikeAtDirect <X extends ArrayLike<any>, Index extends number> = number extends Index
? ArrayLikeAtResult<X>
: `${Index}` extends `-${number}`
	? undefined
	: ArrayLikeAtResult<X>;
	
export type ArrayLikeAtDirectCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndexDirect<Index>, x: X) => ArrayLikeAtDirect<X, Index>;
