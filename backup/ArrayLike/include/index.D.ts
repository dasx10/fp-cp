import type { placeholder } from "../../index"
import type { ArrayLikeIncludeCore } from "./core/index.D"

export type ArrayLikeIncludeDef = ArrayLikeIncludeCore & {
	<Value>(value: Value): (x: ArrayLike<Value>) => boolean;
	<Value>(_: placeholder, x: ArrayLike<Value>): (value: Value) => boolean;
}
