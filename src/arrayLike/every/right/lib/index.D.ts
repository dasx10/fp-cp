import type { ArrayLikeEveryRightCore } from "../core/index.D";

export interface ArrayLikeEveryRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core: ArrayLikeEveryRightCore <Type>;
}
