import type { placeholder } from "../../../index";
import type { ArrayLikeIndexOfCore } from "./core/index.D";

export type ArrayLikeIndexOfDef = ArrayLikeIndexOfCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => number;
  <Value>(_: placeholder, x: ArrayLike<Value>): <Value>(value: Value) => number;
}
