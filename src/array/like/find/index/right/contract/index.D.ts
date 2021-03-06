import { __ } from '../../../../../../index';
import { ArrayLikeValue, ArrayLikeIndex } from './../../../../index.D';
import { ArrayLikeFindIndexCore }         from './../../core/index.D';

export type ArrayLikeFindIndexRightDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindIndexCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeIndex<X> | -1;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeIndex<X> | -1;
};
