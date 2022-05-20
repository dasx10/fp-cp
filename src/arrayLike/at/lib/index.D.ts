import type { ArrayLikeAtCore }       from "../core/index.D";

import type { ArrayLikeAtRightMain }  from "../right/index.D";

import type { ArrayLikeAtRandomMain } from "../random/index.D";
import type { ArrayLikeAtFirstMain }  from "../first/index.D";
import type { ArrayLikeAtLastMain }   from "../last/index.D";
import type { ArrayLikeAtDirectMain } from "../direct/index.D";
import type { ArrayLikeAtInvertMain } from "../invert/index.D";

export type ArrayLikeAtLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = {
	readonly core    : ArrayLikeAtCore       <Type>,

	readonly right   : ArrayLikeAtRightMain  <Type>,

	readonly random  : ArrayLikeAtRandomMain <Type>,
	readonly first   : ArrayLikeAtFirstMain  <Type>,
	readonly last    : ArrayLikeAtLastMain   <Type>,
	readonly direct  : ArrayLikeAtDirectMain <Type>,
	readonly invert  : ArrayLikeAtInvertMain <Type>,
}
