import type { __ } from "../../../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../../index.D";
import type { ArrayLikeFilterIndexesRevers } from "../../core/index.D";
import type { ArrayLikeFilterIndexesReversRightCore } from "../core/index.D";

export type ArrayLikeFilterIndexesReversRightDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterIndexesReversRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterIndexesRevers<X>;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeFilterIndexesRevers<X>;
}
