import type { __ } from './../../../../index';
import type { ArrayLikeGroup } from './../core/index.D';
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeGroupCore } from "../core/index.D";

export type ArrayLikeGroupDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeGroupCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
		Key               extends PropertyKey = PropertyKey
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => Key): <X extends WaitArrayLikeType>(x: X) => ArrayLikeGroup<Key, X>;
	
	<X extends Type>(_:__, x: X): <Key extends PropertyKey>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => Key) => ArrayLikeGroup<Key, X>;
}
