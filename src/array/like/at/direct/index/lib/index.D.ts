import type { ArrayLikeAtDirectIndexCore } from "../core/index.D";

export interface ArrayLikeAtDirectIndexLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeAtDirectIndexCore <Type>;
}
