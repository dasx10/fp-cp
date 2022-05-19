import type { ArrayLikeAtCore }       from "../core/index.D";
import type { ArrayLikeHeadCore }     from "../head/index.D";
import type { ArrayLikeAtRandomCore } from "../random/index.D";
import type { ArrayLikeTailCore }     from "../tail/index.D";

<<<<<<< HEAD
import type { ArrayLikeAtDirectMain } from "../direct/index.D";
=======
import type { ArrayLikeAtLeftMain }   from "../direct/index.D";
>>>>>>> origin/dd2
import type { ArrayLikeAtInvertMain } from "../invert/index.D";
import type { ArrayLikeAtRightMain }  from "../right/index.D";

export type ArrayLikeAtLib = {
	core    : ArrayLikeAtCore,
	head    : ArrayLikeHeadCore,
	tail    : ArrayLikeTailCore,
	random  : ArrayLikeAtRandomCore,
<<<<<<< HEAD

	direct  : ArrayLikeAtDirectMain,
=======
	direct  : ArrayLikeAtLeftMain,
>>>>>>> origin/dd2
	invert  : ArrayLikeAtInvertMain,
	right   : ArrayLikeAtRightMain,
}
