import type { ArrayLikeCountRightCore } from "../core/index.D";

export interface ArrayLikeCountRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core: ArrayLikeCountRightCore <Type>;
}
