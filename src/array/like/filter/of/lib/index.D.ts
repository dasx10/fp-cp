import type { ArrayLikeFilterOfCore } from "../core/index.D";

export interface ArrayLikeFilterOfLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterOfCore<Type>;
}
