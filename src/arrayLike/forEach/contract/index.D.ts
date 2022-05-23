import type { __ }                             from '../../../index';
import type { ArrayLikeIndex, ArrayLikeValue } from '../../index.D';
import type { ArrayLikeForEachCore }           from './../core/index.D';

export type ArrayLikeForEachDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeForEachCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => void;
	
	<X extends Type>(_: __, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => void;
};
