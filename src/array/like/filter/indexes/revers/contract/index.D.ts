
import type { __ }                                                             from '../../../../../../index';
import type { ArrayLikeIndex, ArrayLikeValue }                                 from '../../../../index.D';
import type { ArrayLikeFilterIndexesRevers, ArrayLikeFilterIndexesReversCore } from './../core/index.D';

export type ArrayLikeFilterIndexesReversDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterIndexesReversCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilterIndexesRevers<X>;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeFilterIndexesRevers<X>;
}
