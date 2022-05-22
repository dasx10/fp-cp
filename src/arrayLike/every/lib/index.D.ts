import type { ArrayLikeEveryCore } from "../core/index.D";
import type { ArrayLikeEveryRightMain } from "../right/index.D";

export interface ArrayLikeEveryLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core  : ArrayLikeEveryCore      <Type>;
	right : ArrayLikeEveryRightMain <Type>;
}
