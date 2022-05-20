import type { ToIndex }       from "../../../arrayLike/index/index.D";
import type { ArrayValue }    from "../../index.D"
import type { ArrayAtDirect } from "../direct/core/index.D";
import type { ArrayAtInvert } from "../invert/core/index.D";

export type ArrayAtResult<X extends readonly any[]> = ArrayValue<X> | undefined;

export type ArrayAt <Index extends number, X extends readonly any[]> = number extends Index
	? ArrayAtResult<X>
	: `${Index}` extends `-${number}`
		? ArrayAtInvert<Index, X>
		: ArrayAtDirect<Index, X>;

export type ArrayAtCore = <Index extends number, X extends readonly any[]>(index: ToIndex<Index>, x: X) => ArrayAt<Index, X>;
