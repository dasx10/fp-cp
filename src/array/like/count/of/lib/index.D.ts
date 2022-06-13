import type { ArrayLikeCountOfBase } from "../base/index.D";
import type { ArrayLikeCountOfCore } from "../core/index.D";

export interface ArrayLikeCountOfLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly base: ArrayLikeCountOfBase <Type>;
	readonly core: ArrayLikeCountOfCore <Type>;
}
