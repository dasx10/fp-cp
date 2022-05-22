import type { ArrayLikeCountValueBase } from "../base/index.D";
import type { ArrayLikeCountValueCore } from "../core/index.D";

export interface ArrayLikeCountValueLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly base: ArrayLikeCountValueBase <Type>;
	readonly core: ArrayLikeCountValueCore <Type>;
}
