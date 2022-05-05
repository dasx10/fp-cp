import type { placeholder } from "../../../../index";
import type { ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtInvert, ArrayLikeAtInvertCore } from "../core/index.D";

export type ArrayLikeAtInvertDef = ArrayLikeAtInvertCore & {
  <Index extends number>(index: ToIndexInvert<Index>): <X extends ArrayLike<any>>(x: X) => ArrayLikeAtInvert<X, Index>;
  <X extends ArrayLike<any>>(_: placeholder, x: X): <Index extends number>(index: ToIndexInvert<Index>) => ArrayLikeAtInvert<X, Index>;
}
