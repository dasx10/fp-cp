import type { placeholder }                from "../../../../../index";
import type { ToIndexDirect }              from "../../../../index/index.D";
import type { ArrayLikeAtDirectIndexCore } from "../core/index.D";

export type ArrayLikeAtDirectIndexDef = ArrayLikeAtDirectIndexCore & {
	<Index extends number>(index: ToIndexDirect<Index>): <X extends ArrayLike<any>>(x: X) => Index | void;
	<X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndexDirect<Index>) => Index | void;
}
