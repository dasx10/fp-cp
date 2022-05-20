import type { placeholder } from "../../index";
import type { ArrayLikeJoin, ArrayLikeJoinCore } from "./core/index.D";

export type ArrayLikeJoinDef = ArrayLikeJoinCore & {
	<SEPARATOR extends string>(separator: SEPARATOR): <X extends ArrayLike<unknown>>(x: X) => ArrayLikeJoin<X, SEPARATOR>;
	<X extends ArrayLike<unknown>>(_: placeholder, x: X): <SEPARATOR extends string>(separator: SEPARATOR) => ArrayLikeJoin<X, SEPARATOR>;
}
