import type { placeholder }          from "../../index";
import type { ArrayLikeIterator }    from "../index.D";
import type { ArrayLikeForEachCore } from "./core/index.D";

export type ArrayLikeForEachDef = ArrayLikeForEachCore & {
  <X>(def: ArrayLikeIterator<X>):(x: ArrayLike<X>) => void;
  <X>(_: placeholder, x: ArrayLike<X>): (def: ArrayLikeIterator<X>) => void;
};
