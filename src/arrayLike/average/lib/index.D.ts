import type { ArrayLikeAverageCore } from "../core/index.D";
import type { ArrayLikeAverageRightMain } from "../right/index.D";

export interface ArrayLikeAverageLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core  : ArrayLikeAverageCore      <Type>;
	right : ArrayLikeAverageRightMain <Type>;
}
