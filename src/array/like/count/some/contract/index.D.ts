import type { __ } from "../../../../../index";
import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountSome, ArrayLikeCountSomeCore } from "../core/index.D";

export type ArrayLikeCountSomeDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeCountSomeCore<Type> & {
	<FindValues extends readonly ArrayLikeValue<Type>[]>(findValues: FindValues): <X extends Type>(x: X) => ArrayLikeCountSome<FindValues, X>;
	<X extends Type>(_:__, x: X): <FindValues extends readonly ArrayLikeValue<X>[]> (findValues: FindValues) => ArrayLikeCountSome<FindValues, X>;
};
