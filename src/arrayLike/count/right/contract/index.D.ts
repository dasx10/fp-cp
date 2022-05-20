import type { placeholder } from "../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountRightCore } from "../core/index.D";

export type ArrayLikeCountRightDef = ArrayLikeCountRightCore & {
	<Value>(def: (value: Value, index: number, arrayLike: ArrayLike<Value>) => any): <X extends ArrayLike<Value>>(x: X) => number;
	<X extends ArrayLike<unknown>>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => any) => number;
}
