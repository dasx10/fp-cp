import type { __ }                             from "../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeUniqByCore }            from "../core/index.D";

export type ArrayLikeUniqByDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeUniqByCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeValue<X>[];
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeValue<X>[];
}
