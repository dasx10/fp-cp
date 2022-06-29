import type { __ } from "../../../../index";
import type { ArrayLikeSelect, ArrayLikeSelectCore } from "../core/index.D";

export type ArrayLikeSelectDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeSelectCore & {
	<Indexes extends readonly number[]>(indexes: Indexes): <X extends Type>(x: X) => ArrayLikeSelect<Indexes, X>;
	<X extends Type>(_:__, x: X): <Indexes extends readonly number[]>(indexes: Indexes) => ArrayLikeSelect<Indexes, X>;
}
