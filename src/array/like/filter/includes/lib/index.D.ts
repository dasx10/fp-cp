import type { ArrayLikeFilterIncludesCore } from "../core/index.D";

export interface ArrayLikeFilterIncludesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterIncludesCore<Type>
}
