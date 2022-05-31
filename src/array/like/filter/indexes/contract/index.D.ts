import type { __ }                                                 from '../../../../../index';
import type { ArrayLikeIndex, ArrayLikeValue }                     from '../../../index.D';
import type { ArrayLikeFilterIndexesCore, ArrayLikeFilterIndexes } from './../core/index.D';

export type ArrayLikeFilterIndexesDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterIndexesCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterIndexes<X>;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeFilterIndexes<X>;
}
