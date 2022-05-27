import type { ArrayLikeFindIndexCore } from "../core/index.D";
import type { ArrayLikeFindIndexRightMain } from "../right/index.D";

export interface ArrayLikeFindIndexLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFindIndexCore      <Type>;
	readonly right : ArrayLikeFindIndexRightMain <Type>;
}
