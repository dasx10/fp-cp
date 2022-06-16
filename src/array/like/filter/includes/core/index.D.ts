import type { ArrayLikeValue }    from "../../../index.D";
import type { ArrayLikeFilterOf } from "../../of/core/index.D";

export type ArrayLikeFilterIncludes <FindValues extends readonly unknown[], X extends ArrayLike<unknown>> = ArrayLikeFilterOf<ArrayLikeValue<FindValues>, X>;


export type ArrayLikeFilterIncludesCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <
	FindValues extends readonly ArrayLikeValue<X>[],
	X extends Type
> (findValues: FindValues, x: X) => ArrayLikeFilterIncludes<FindValues, X>
