import type { ArrayLikeEveryCore } from "../core/index.D";
import type { ArrayLikeEveryRightMain } from "../right/index.D";

export interface ArrayLikeEveryLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeEveryCore      <Type>;
	readonly right : ArrayLikeEveryRightMain <Type>;
}
