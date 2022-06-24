import type { ArrayLikeGroupRightCore } from "../core/index.D";

export interface ArrayLikeGroupRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeGroupRightCore<Type>;
}
