import type { __ }                                                                              from '../../../../../index';
import type { ArrayLikeFilterReverse, ArrayLikeFilterReversCore, ArrayLikeFilterReversPredicate } from '../core/index.D';
import type { ArrayLikeIndex, ArrayLikeValue }                                                  from "../../../index.D";

export type ArrayLikeFilterReverseDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterReversCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value | Predicate>,
		Predicate,
	>(def: (
			value : Value,
			index : ArrayLikeIndex<WaitArrayLikeType>,
			// @ts-ignore
			x     : WaitArrayLikeType & ArrayLike<Value | Predicate>) => value is Predicate): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterReversPredicate<X, Predicate & ArrayLikeValue<X>>;

	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterReverse<X>;
	
	
	<X extends Type>(_:__, x: X): {
		// @ts-ignore
		<Predicate>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate): ArrayLikeFilterReversPredicate<X, Predicate & ArrayLikeValue<X>>;
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown): ArrayLikeFilterReverse<X>;
	}
}
