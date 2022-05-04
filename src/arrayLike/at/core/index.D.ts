import type { ArrayLikeValue } from "../../index.D";
import type { ToIndex } from "../../index/index.D";
import type { ArrayLikeAtLeft } from "../left/core/index.D";
import type { ArrayLikeAtRight } from "../right/core/index.D";

export type ArrayLikeAtResult<X extends ArrayLike<any>> = ArrayLikeValue<X> | undefined;

export type ArrayLikeAt<X extends ArrayLike<any>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtRight<X, Index> 
		: ArrayLikeAtLeft<X, Index>;

export type ArrayLikeAtCore = <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index>, x: X) => ArrayLikeAt<X, Index>;
