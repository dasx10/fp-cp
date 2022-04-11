import type { placeholder } from "../../../index";
import type { IndexOfCore } from "./_/index.D";

export type IndexOfDef = IndexOfCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => number;
  <Value>(_: placeholder, x: ArrayLike<Value>): <Value>(value: Value) => number;
}
