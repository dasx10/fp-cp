import type { ArrayLikeValue, DirectiveValue } from "../../index.D";
import type { ArrayLikeAtDirect }              from "../direct/core/index.D";
import type { ArrayLikeAtInvert }              from "../invert/core/index.D";
import type { ToIndex }                        from "../../index/index.D";

export type DirectiveAtResult <X extends Record<number, unknown>> = DirectiveValue<X> | undefined;
export type ArrayLikeAtResult <X extends ArrayLike<unknown>>      = ArrayLikeValue<X> | undefined;

export type ArrayLikeAt<X extends ArrayLike<unknown>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtInvert<X, Index> 
		: ArrayLikeAtDirect<X, Index>;

/** Returns the item located at the specified index */
export type ArrayLikeAtCore<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Index extends number, X extends Type>(index: ToIndex<Index>, x: X) => ArrayLikeAt<X, Index>;
