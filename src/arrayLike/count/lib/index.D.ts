import type { ArrayLikeCountCore }      from "../core/index.D";
import type { ArrayLikeCountRightMain } from './../right/index.D';
import type { ArrayLikeCountValueMain } from "../value/index.D";

export interface ArrayLikeCountLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core  : ArrayLikeCountCore      <Type>;
	right : ArrayLikeCountRightMain <Type>;
	value : ArrayLikeCountValueMain <Type>;
}
