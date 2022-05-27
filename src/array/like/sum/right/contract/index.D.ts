import type { __ }                             from '../../../../index';
import type { ArrayLikeIndex, ArrayLikeValue } from '../../../index.D';
import type { ArrayLikeSumRightCore }          from './../core/index.D';

export type ArrayLikeSumRightDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSumRightCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => number): <X extends WaitArrayLikeType>(x: X) => number;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number) => number;
}
