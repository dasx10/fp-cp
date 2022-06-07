import type { ArrayLikeIndex, ArrayLikeValue } from './../../index.D';
import type { ArrayLikeEveryCore }             from "../core/index.D";
import type { __ } from '../../../../index';

export type ArrayLikeEveryDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeEveryCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => boolean;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => boolean;
};
