import type { ArrayLikeForEachRightCore } from "../core/index.D";

export interface ArrayLikeForEachRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeForEachRightCore<Type>
}
