import type { ArrayLikeIndex, ArrayLikeValue }  from './../../index.D';
import type { placeholder }                     from "../../../index";
import type { ArrayLikeEveryCore }              from "../core/index.D";

export type ArrayLikeEveryDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeEveryCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type & ArrayLike<Value> = Type & ArrayLike<Value>,
	>(def: (value: Value & ArrayLikeValue<WaitArrayLikeType>, index: ArrayLikeIndex<WaitArrayLikeType>, x: WaitArrayLikeType & ArrayLike<Value>) => any): <X extends WaitArrayLikeType>(x: X) => boolean;
	
	<X extends Type>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => boolean;
};
