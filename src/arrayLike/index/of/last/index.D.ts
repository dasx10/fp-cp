import type { placeholder } from '../../../../index';
import type { ToIndexRight } from "../../index.D";
import type { ArrayLikeIndexOfLastCore } from "./core/index.D";

export type ArrayLikeIndexOfLastDef = ArrayLikeIndexOfLastCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => ToIndexRight<number> | -1;
  <Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => ToIndexRight<number> | -1;
}
