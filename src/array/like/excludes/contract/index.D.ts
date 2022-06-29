import type { __ } from "../../../../index";
import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeExcludes, ArrayLikeExcludesCore } from "../core/index.D";

export type ArrayLikeExcludesDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeExcludesCore & {
	<Value extends ArrayLikeValue<Type>>(value: Value): <X extends Type>(x: X) => ArrayLikeExcludes<X>;
	<X extends Type> (_:__, x: X) : <Value extends ArrayLikeValue<X>>(value: Value) => ArrayLikeExcludes<X>;
}
