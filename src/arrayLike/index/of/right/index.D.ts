import { placeholder } from './../../../../index';
import { ToIndexRight } from "../../index.D";
import { IndexOfRightCore } from "./_/index.D";

export type IndexOfRightDef = IndexOfRightCore & {
  <Value>(value: Value): (x: ArrayLike<Value>) => ToIndexRight<number> | -1;
  <Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => ToIndexRight<number> | -1;
}
