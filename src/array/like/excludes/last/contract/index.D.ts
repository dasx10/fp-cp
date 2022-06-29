import type { __ }                        from "../../../../../index";
import type { ArrayLikeValue }            from "../../../index.D";
import type { ArrayLikeExcludes }         from "../../core/index.D";
import type { ArrayLikeExcludesLastCore } from "../core/index.D";

export type ArrayLikeExcludesLastDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeExcludesLastCore & {
	<Value extends ArrayLikeValue<Type>>(value: Value): <X extends Type>(x: X) => ArrayLikeExcludes<X>;
	<X extends Type> (_:__, x: X) : <Value extends ArrayLikeValue<X>>(value: Value) => ArrayLikeExcludes<X>;
}
