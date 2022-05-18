import type { ToIndexInvert } from "../../../../arrayLike/index/index.D";
import type { placeholder }   from "../../../../index";
import type { ArrayAtInvert, ArrayAtInvertCore } from "../core/index.D";

export type ArrayAtInvertDef = ArrayAtInvertCore & {
	<Index extends number>(index: ToIndexInvert<Index>): <X extends readonly any[]>(x: X) => ArrayAtInvert<Index, X>;
	<X extends readonly any[]> (_: placeholder, x: X): <Index extends number> (index: ToIndexInvert<Index>) => ArrayAtInvert<Index, X>;
}
