import type { __ } from "../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeMap, ArrayLikeMapCore } from "../core/index.D";

export type ArrayLikeMapDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeMapCore<Type> & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type,
		Result,
	>(def: (
		value : Value & ArrayLikeValue<Type>,
		index : ArrayLikeIndex<WaitArrayLikeType>,
		x     : WaitArrayLikeType & ArrayLike<Value>) => Result): <X extends WaitArrayLikeType & ArrayLike<Value>> (x: X) => ArrayLikeMap<Result, X>;
		
		<X extends Type>(_:__, x: X): <Result>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result) => ArrayLikeMap<Result, X>;
};
