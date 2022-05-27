import type { ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtResult } from "../../core/index.D";

// export type TupleAtInvert<Index extends number, X extends readonly any[]> = `${Index}` extends `-${infer Invert}`
// 	// @ts-ignore
// 	? [undefined, ...TupleReverse<X>][Invert]
// 	: undefined;

// export type ArrayAtInvert <Index extends number, X extends readonly any[]> = X extends readonly [...infer Values]
// 	? TupleAtInvert<Index, Values>
// 	: ArrayAtResult<X>;

export type ArrayLikeAtInvert <X extends ArrayLike<unknown>, Index extends number> = number extends Index
	? ArrayLikeAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayLikeAtResult<X>
		: undefined;

export type ArrayLikeAtInvertCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <Index extends number, X extends Type> (index: ToIndexInvert<Index>, x: X) => ArrayLikeAtInvert<X, Index>
