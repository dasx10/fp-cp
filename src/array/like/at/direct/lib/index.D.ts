// interfaces
import type { ArrayLikeAtDirectCore }      from "../core/index.D";
import type { ArrayLikeAtDirectIndexMain } from "../index/index.D";

export interface ArrayLikeAtDirectLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeAtDirectCore      <Type>,
	readonly index : ArrayLikeAtDirectIndexMain <Type>,
}
