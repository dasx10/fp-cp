import type { ArrayLikeAverageRightCore } from "../core/index.D";

export interface ArrayLikeAverageRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core: ArrayLikeAverageRightCore <Type>;
}
