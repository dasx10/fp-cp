import type { placeholder } from '../../../../index';
import type { ToIndexInvert } from "../../index.D";
import type { ArrayLikeIndexOfLastCore } from "./core/index.D";

export type ArrayLikeIndexOfLastDef = ArrayLikeIndexOfLastCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => ToIndexInvert<number> | -1;
  <Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => ToIndexInvert<number> | -1;
}
