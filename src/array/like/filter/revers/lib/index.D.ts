import type { ArrayLikeFilterReversCore } from "../core/index.D";
import type { ArrayLikeFilterReversRightMain } from "../right/index.D";

export interface ArrayLikeFilterReversLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFilterReversCore     <Type>;
	readonly right : ArrayLikeFilterReversRightMain<Type>;
}
