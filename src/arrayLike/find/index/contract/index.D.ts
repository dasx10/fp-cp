import type { __ } from '../../../../index';
import type { ArrayLikeIndex, ArrayLikeValue } from '../../../index.D';
import type { ArrayLikeFindIndexCore } from './../core/index.D';
export type ArrayLikeFindIndexDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindIndexCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => any): <X extends WaitArrayLikeType>(x: X) => ArrayLikeIndex<X> | -1;
	
	<X extends Type>(_: __, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => ArrayLikeIndex<X> | -1;
};
