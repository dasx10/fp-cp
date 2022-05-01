import type { placeholder }       from "../../index";
import type { ArrayLikeIterator } from "../index.D";
import type { ArrayLikeFindCore } from "./core/index.D";

export type ArrayLikeFindDef = ArrayLikeFindCore & {
  <X>(def: ArrayLikeIterator<X>): (x: ArrayLike<X>) => X | undefined,
  <X>(_: placeholder, x: X): (def: ArrayLikeIterator<X>) => X | undefined,
};
