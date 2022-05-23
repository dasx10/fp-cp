import type { __ } from "../../../../index";
import type { ToIndexInvert } from "../../../index/index.D";
import type { ArrayLikeAtInvert, ArrayLikeAtInvertCore } from "../core/index.D";

export type ArrayLikeAtInvertDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAtInvertCore<Type> & {
  <WaitType extends Type = Type, Index extends number = number>(index: ToIndexInvert<Index>): <X extends WaitType>(x: X) => ArrayLikeAtInvert<X, Index>;
  <X extends Type>(_: __, x: X): <Index extends number>(index: ToIndexInvert<Index>) => ArrayLikeAtInvert<X, Index>;
}
