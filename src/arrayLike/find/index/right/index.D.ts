import type { placeholder } from "../../../../index";
import type { ArrayLikeIterator } from "../../../index.D";
import type { ArrayLikeFindIndexRightCore } from "./core/index.D";

export type ArrayLikeFindIndexRightDef = ArrayLikeFindIndexRightCore & {
  <X>(def: ArrayLikeIterator<X>):(x: ArrayLike<X>) => number;
  <X>(_: placeholder, x: ArrayLike<X>): (def: ArrayLikeIterator<X>) => number;
}
