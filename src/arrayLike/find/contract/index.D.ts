import type { ArrayLikeIndex } from './../../index.D';
import type { placeholder } from '../../../index';
import type { ArrayLikeValue } from '../../index.D';
import type { ArrayLikeFindCore } from './../core/index.D';

export type ArrayLikeFindDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFindCore & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => any): <X extends WaitArrayLikeType>(x: X) => X | undefined;
	
	<X extends Type>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => X | undefined;
}

export default ArrayLikeFindDef;
