import type { ArrayLikeValue } from "../../index.D";
import type { ToIndex } from "../../index/index.D";
import type { ArrayLikeAtDirect } from "../direct/core/index.D";
import type { ArrayLikeAtInvert } from "../invert/core/index.D";

export type ArrayLikeAtResult<X extends ArrayLike<any>> = ArrayLikeValue<X> | undefined;

export type ArrayLikeAt<X extends ArrayLike<any>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtInvert<X, Index> 
		: ArrayLikeAtDirect<X, Index>;

export type ArrayLikeAtCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) => ArrayLikeAt<X, Index>;
