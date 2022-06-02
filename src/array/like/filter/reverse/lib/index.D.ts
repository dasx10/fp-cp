import type { ArrayLikeFilterReverseCore } from "../core/index.D";

export interface ArrayLikeFilterReverseLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterReverseCore<Type>
}
