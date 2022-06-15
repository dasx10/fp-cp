import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeFilterOf } from "../../of/core/index.D";

export type ArrayLikeFilterSome <FindValues extends readonly unknown[], X extends ArrayLike<unknown>> = ArrayLikeFilterOf<ArrayLikeValue<FindValues>, X>;


export type ArrayLikeFilterSomeCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	FindValues extends readonly [ArrayLikeValue<X>, ArrayLikeValue<X>, ...ArrayLikeValue<X>[]],
	X extends Type
> (findValues: FindValues, x: X) => ArrayLikeFilterSome<FindValues, X>
