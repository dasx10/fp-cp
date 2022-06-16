import type { __ } from "../../../../../index";
import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeCountIncludes, ArrayLikeCountIncludesCore } from "../core/index.D";

export type ArrayLikeCountIncludesDef<Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeCountIncludesCore<Type> & {
	<FindValues extends readonly ArrayLikeValue<Type>[]>(findValues: FindValues): <X extends Type>(x: X) => ArrayLikeCountIncludes<FindValues, X>;
	<X extends Type>(_:__, x: X): <FindValues extends readonly ArrayLikeValue<X>[]> (findValues: FindValues) => ArrayLikeCountIncludes<FindValues, X>;
};
