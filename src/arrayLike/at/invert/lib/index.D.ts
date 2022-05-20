import type { ArrayLikeAtInvertCore } from "../core/index.D";

export interface ArrayLikeAtInvertLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core: ArrayLikeAtInvertCore <Type>
}
