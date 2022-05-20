
import type { placeholder } from "../../../../index";
import type { ArrayLikeExecutor } from "../../../index.D";
import type { ArrayLikeEveryRightCore } from "../core/index.D";

export type ArrayLikeEveryRightDef = ArrayLikeEveryRightCore & {
	<Value>(def: (value: Value, index: number, arrayLike: ArrayLike<Value>) => any): <X extends ArrayLike<Value>>(x: X) => boolean;
	<X extends ArrayLike<unknown>>(_: placeholder, x: X): (def: ArrayLikeExecutor<X>) => boolean;
};
