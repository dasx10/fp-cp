import type { ArrayLikeIterator }      from "../../index.D";
import type { ArrayLikeFindRightCore } from "./core/index.D";

export type ArrayLikeFindRightDef = ArrayLikeFindRightCore & {
	<X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>): X | undefined,
  <X>(def: ArrayLikeIterator<X>): (x: ArrayLike<X>) => X | undefined
};
