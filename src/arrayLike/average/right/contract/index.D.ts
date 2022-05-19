import type { placeholder } from "../../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeAverageRightCore } from "../core/index.D";

export type ArrayLikeAverageRightDef = ArrayLikeAverageRightCore & {
	<Value>(def: (value: Value, index: number, arrayLike: ArrayLike<Value>) => number): <X extends ArrayLike<Value>>(x: X) => number;
	<X extends ArrayLike<any>>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number) => number;
}
