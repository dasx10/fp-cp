import type { __ }                       from './../../../../../index';
import type { ArrayLikeValue }           from './../../../../index.D';
import type { ArrayLikeIndexOfLastCore } from './../core/index.D';

export type ArrayLikeIndexOfLastDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeIndexOfLastCore & {
	<Value extends ArrayLikeValue<Type>>(value: Value): <X extends Type & ArrayLike<Value | unknown>>(x: X) => number;
	<X extends Type>(_:__, x: X): <Value extends ArrayLikeValue<X>>(value: Value) => number;
}
