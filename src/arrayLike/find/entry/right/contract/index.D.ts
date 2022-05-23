import type { placeholder }                    from "../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../index.D";
import type { ArrayLikeFindEntryRightCore }    from "../core/index.D";

export type ArrayLikeFindEntryRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindEntryRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => any): <X extends WaitArrayLikeType>(x: X) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
	
	<X extends Type>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => [ArrayLikeIndex<X>, ArrayLikeValue<X>] | void;
}
