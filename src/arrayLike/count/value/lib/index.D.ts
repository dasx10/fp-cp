import type { ArrayLikeCountValueBase } from "../base/index.D";
import type { ArrayLikeCountValueCore } from "../core/index.D";

export interface ArrayLikeCountValueLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	base: ArrayLikeCountValueBase <Type>;
	core: ArrayLikeCountValueCore <Type>;
}
