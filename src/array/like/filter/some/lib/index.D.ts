import type { ArrayLikeFilterSomeCore } from "../core/index.D";

export interface ArrayLikeFilterSomeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterSomeCore<Type>
}
