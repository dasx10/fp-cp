import type { ArrayLikeCountRightCore } from "../core/index.D";

export interface ArrayLikeCountRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeCountRightCore <Type>;
}
