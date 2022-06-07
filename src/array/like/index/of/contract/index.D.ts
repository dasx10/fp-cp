import type { __ } from './../../../../../index';
import type { ArrayLikeValue }       from './../../../index.D';
import type { ArrayLikeIndexOfCore } from './../core/index.D';

export type ArrayLikeIndexOfDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexOfCore & {
	<Value extends ArrayLikeValue<Type>>(value: Value): <X extends Type & ArrayLike<Value | unknown>>(x: X) => number;
	<X extends Type>(_:__, x: X): <Value extends ArrayLikeValue<X>>(value: Value) => number;
}
