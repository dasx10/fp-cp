import type { ToIndex } from "../../../arrayLike/index/index.D";
import type { placeholder } from "../../../index";
import type { ArrayAt, ArrayAtCore } from "../core/index.D";

export type ArrayAtDef = ArrayAtCore & {
	<Index extends number>(index: ToIndex<Index>): <X extends readonly any[]>(x: X) => ArrayAt<Index, X>
	<X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayAt<Index, X>;
}
