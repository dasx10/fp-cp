import type { ArrayLikeAtInvertCore } from "../core/index.D";

export interface ArrayLikeAtInvertLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeAtInvertCore <Type>
}
