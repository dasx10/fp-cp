import type { placeholder } from "../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeAverageRightCore } from "../core/index.D";

export type ArrayLikeAverageRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeAverageRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => number): <X extends WaitArrayLikeType>(x: X) => number;
	
	<X extends Type>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number) => number;
}
