import type { __ } from "../../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeMap } from "../../core/index.D";
import type { ArrayLikeMapReversCore } from "../core/index.D";

export type ArrayLikeMapReversDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeMapReversCore & {
	<
		Value             extends ArrayLikeValue<Type>,
		WaitArrayLikeType extends Type,
		Result,
	>(def: (
		value : Value,
		index : ArrayLikeIndex<WaitArrayLikeType>,
		// @ts-ignore
		x     : WaitArrayLikeType) => Result): <X extends WaitArrayLikeType & ArrayLike<Value>> (x: X) => ArrayLikeMap<Result, X>;
		
		<X extends Type>(_:__, x: X): <Result>(def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => Result) => ArrayLikeMap<Result, X>;
}
