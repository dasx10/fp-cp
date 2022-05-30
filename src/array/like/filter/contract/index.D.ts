import type { __ }              from './../../../../index';
import type { ArrayLikeIndex }  from './../../index.D';
import type { ArrayLikeFilter } from './../core/index.D';
import type { ArrayFilterCore } from "../core/index.D";
import type { ArrayLikeValue }  from '../../index.D';

export type ArrayLikeFilterDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayFilterCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => unknown): <X extends WaitArrayLikeType>(x: X) => ArrayLikeFilter<X>;
	
	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown) => ArrayLikeFilter<X>;
}
