import type { __ } from "../../../../index";
import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeSort, ArrayLikeSortCore } from "../core/index.D";

export type ArrayLikeSortDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSortCore <Type> & {
	<Value extends ArrayLikeValue<Type>>(def: (a: Value, b: Value) => unknown): <X extends Type & ArrayLike<Value>>(x: X) => ArrayLikeSort<X>;
	<X extends Type>(_:__, x: X): (def: (a: ArrayLikeValue<X>, b: ArrayLikeValue<X>) => unknown) => ArrayLikeSort<X>;
}
