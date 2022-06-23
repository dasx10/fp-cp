import type { __ }                                     from "../../../../../index";
import type { ArrayLikeValue }                         from "../../../index.D";
import type { ArrayLikeOrderBy, ArrayLikeOrderByCore } from "../core/index.D";

export type ArrayLikeOrderByDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeOrderByCore & {
	<
		Value extends ArrayLikeValue<Type>,
	>(def: (value: Value) => unknown): <X extends Type & ArrayLike<Value>>(x: X) => ArrayLikeOrderBy<X>;

	<X extends Type>(_:__, x: X): (def: (value: ArrayLikeValue<X>) => unknown) => ArrayLikeOrderBy<X>;
}
