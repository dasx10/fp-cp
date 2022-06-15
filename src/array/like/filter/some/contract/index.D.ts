import type { __ }                                           from "../../../../../index";
import type { ArrayLikeValue }                               from "../../../index.D";
import type { ArrayLikeFilterSome, ArrayLikeFilterSomeCore } from "../core/index.D";

export type ArrayLikeFilterSomeDef <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = ArrayLikeFilterSomeCore<Type> & {
	<FindValues extends readonly [ArrayLikeValue<Type>, ArrayLikeValue<Type>, ...ArrayLikeValue<Type>[]]>(findValues: FindValues): <X extends Type> (x: X) => ArrayLikeFilterSome<FindValues, X>;
	<X extends Type> (_:__, x: X): <FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]]>(findValues: FindValues) => ArrayLikeFilterSome<FindValues, X>;
}
