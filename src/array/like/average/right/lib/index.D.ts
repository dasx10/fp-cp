import type { ArrayLikeAverageRightCore } from "../core/index.D";

export interface ArrayLikeAverageRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeAverageRightCore <Type>;
}
