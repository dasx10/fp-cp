// interfaces
import type { placeholder }                    from "../../../index";
import type { ArrayLikeIndex, ArrayLikeValue } from "../../index.D";
import type { ArrayLikeAverageCore }           from "../core/index.D";

export type ArrayLikeAverageDef = ArrayLikeAverageCore & {
	<Value>(def: (value: Value, index: number, arrayLike: ArrayLike<Value>) => number): <X extends ArrayLike<Value>>(x: X) => number;
	<X extends ArrayLike<unknown>>(_: placeholder, x: X): (def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => number) => number;
};
