import type { __ } from "../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeJoinBy, ArrayLikeJoinByCore } from "../core/index.D";

export type ArrayLikeJoinByDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeJoinByCore<Type> & {
	<
	Value             extends ArrayLikeValue<Type>,
	WaitArrayLikeType extends Type,
	Result,
>(def: (
	value : Value & ArrayLikeValue<Type>,
	index : ArrayLikeIndex<WaitArrayLikeType>,
	x     : WaitArrayLikeType & ArrayLike<Value>) => Result): <X extends WaitArrayLikeType & ArrayLike<Value>> (x: X) => ArrayLikeJoinBy<Result, X>;
	
	<X extends Type>(_:__, x: X): <Result>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result) => ArrayLikeJoinBy<Result, X>;
}
