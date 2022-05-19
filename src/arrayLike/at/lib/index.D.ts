import type { ArrayLikeAtCore }       from "../core/index.D";
import type { ArrayLikeHeadCore }     from "../head/index.D";
import type { ArrayLikeAtRandomCore } from "../random/index.D";
import type { ArrayLikeTailCore }     from "../tail/index.D";

import type { ArrayLikeAtLeftMain }   from "../direct/index.D";
import type { ArrayLikeAtInvertMain } from "../invert/index.D";
import type { ArrayLikeAtRightMain }  from "../right/index.D";

export type ArrayLikeAtLib = {
	core    : ArrayLikeAtCore,
	head    : ArrayLikeHeadCore,
	tail    : ArrayLikeTailCore,
	random  : ArrayLikeAtRandomCore,
	direct  : ArrayLikeAtLeftMain,
	invert  : ArrayLikeAtInvertMain,
	right   : ArrayLikeAtRightMain,
}
