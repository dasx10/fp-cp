import type { __ } from "../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountRightCore } from "../core/index.D";

export type ArrayLikeCountRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeCountRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => any): <X extends WaitArrayLikeType>(x: X) => number;
	
	<X extends Type>(_: __, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => number;
}
