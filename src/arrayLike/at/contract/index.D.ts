import type { placeholder } from "../../../index";
import type { ToIndex } from "../../index/index.D";
import type { ArrayLikeAt, ArrayLikeAtCore } from "../core/index.D";

export type ArrayLikeAtDef = ArrayLikeAtCore & {
	<Index extends number>(index: ToIndex<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAt<X, Index>;
	<X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayLikeAt<X, Index>;
};
