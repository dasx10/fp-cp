import type { placeholder } from "../../../index";
import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeIndexOfCore } from "./core/index.D";

export type ArrayLikeIndexOfDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexOfCore<Type> & {
  <Value extends ArrayLikeValue<Type>>(value: Value): (x: ArrayLike<Value>) => number;
  <X extends Type>(_: placeholder, x: X): <Value extends ArrayLikeValue<X>>(value: Value) => number;
}
