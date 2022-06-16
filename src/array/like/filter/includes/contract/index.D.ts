import type { __ }                                           from "../../../../../index";
import type { ArrayLikeValue }                               from "../../../index.D";
import type { ArrayLikeFilterIncludes, ArrayLikeFilterIncludesCore } from "../core/index.D";

export type ArrayLikeFilterIncludesDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterIncludesCore<Type> & {
	<FindValues extends readonly ArrayLikeValue<Type>[]>(findValues: FindValues): <X extends Type> (x: X) => ArrayLikeFilterIncludes<FindValues, X>;
	<X extends Type> (_:__, x: X): <FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]]>(findValues: FindValues) => ArrayLikeFilterIncludes<FindValues, X>;
}
