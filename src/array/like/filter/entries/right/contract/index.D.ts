import type { ArrayLikeFilterEntriesRightCore }                         from '../core/index.D';
import type { ArrayLikeFilterEntriesPredicate, ArrayLikeFilterEntries } from '../../core/index.D';
import type { ArrayLikeIndex, ArrayLikeValue }                          from '../../../../index.D';
import type { __ }                                                      from '../../../../../../index';

export type ArrayLikeFilterEntriesRightDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterEntriesRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value | Predicate>,
		Predicate,
	>(def: (
			value : Value,
			index : ArrayLikeIndex<WaitArrayLikeType>,
			// @ts-ignore
			x     : WaitArrayLikeType & ArrayLike<Value | Predicate>) => value is Predicate): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterEntriesPredicate<X, Predicate & ArrayLikeValue<X>>;

	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterEntries<X>;
	
	<X extends Type>(_:__, x: X): {
		// @ts-ignore
		<Predicate>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => value is Predicate): ArrayLikeFilterEntriesPredicate<X, Predicate & ArrayLikeValue<X>>;
		(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown): ArrayLikeFilterEntries<X>;
	}
}
