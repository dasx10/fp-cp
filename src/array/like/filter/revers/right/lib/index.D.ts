import type { ArrayLikeFilterReversRightCore } from "../core/index.D";

export interface ArrayLikeFilterReversRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterReversRightCore<Type>
}
