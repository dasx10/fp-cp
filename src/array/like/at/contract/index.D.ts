import type { __ }                  from "../../../../index";
import type { ToIndex }                      from "../../index/index.D";
import type { ArrayLikeAt, ArrayLikeAtCore } from "../core/index.D";

export type ArrayLikeAtDef <TypeArrayLike extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtCore<TypeArrayLike> & {
	<WaitTypeArrayLike extends TypeArrayLike = TypeArrayLike, Index extends number = number>(index: ToIndex<Index>): <X extends WaitTypeArrayLike>(x: X) => ArrayLikeAt<X, Index>;
	<X extends TypeArrayLike>(_: __, x: X): <Index extends number>(index: ToIndex<Index>) => ArrayLikeAt<X, Index>;
};
