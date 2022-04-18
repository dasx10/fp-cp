import type { placeholder } from './../../../../index';
import type { ToIndexRight } from "../../index.D";
import type { IndexOfRightCore } from "./_/index.D";

export type IndexOfRightDef = IndexOfRightCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => ToIndexRight<number> | -1;
  <Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => ToIndexRight<number> | -1;
}
