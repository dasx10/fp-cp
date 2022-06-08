import type { __ } from "../../../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../../../index.D";
import type { ArrayLikeFilterEntriesRevers, ArrayLikeFilterEntriesReversPredicate } from "../../core/index.D";
import type { ArrayLikeFilterEntriesReversRightCore } from "../core/index.D";


export type ArrayLikeFilterEntriesReversRightDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterEntriesReversRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value | Predicate>,
		Predicate,
	>(def: (
			value : Value,
			index : ArrayLikeIndex<WaitArrayLikeType>,
			// @ts-ignore
			x     : WaitArrayLikeType & ArrayLike<Value | Predicate>) => value is Predicate): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterEntriesReversPredicate<X, Predicate & ArrayLikeValue<X>>;
	
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterEntriesRevers<X>;
	
	
	<X extends Type>(_:__, x: X): {
		// @ts-ignore
		<Predicate>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate): ArrayLikeFilterEntriesReversPredicate<X, Predicate & ArrayLikeValue<X>>;
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown): ArrayLikeFilterEntriesRevers<X>;
	}
}
