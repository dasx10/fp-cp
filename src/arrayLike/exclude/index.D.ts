import type { placeholder } from "../../index"
import type { ArrayLikeExcludeCore } from "./core/index.D"

export type ArrayLikeExcludeDef = ArrayLikeExcludeCore & {
	<Value>(value: Value): (x: ArrayLike<Value>) => boolean;
	<Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => boolean;
}
