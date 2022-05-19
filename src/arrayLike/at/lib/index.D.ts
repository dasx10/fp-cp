import type { ArrayLikeAtCore }       from "../core/index.D";

import type { ArrayLikeAtRightMain }  from "../right/index.D";

import type { ArrayLikeAtRandomMain } from "../random/index.D";
import type { ArrayLikeAtFirstMain }  from "../first/index.D";
import type { ArrayLikeAtLastMain }   from "../last/index.D";
import type { ArrayLikeAtDirectMain } from "../direct/index.D";
import type { ArrayLikeAtInvertMain } from "../invert/index.D";

export type ArrayLikeAtLib = {
	core    : ArrayLikeAtCore,

	right   : ArrayLikeAtRightMain,

	random  : ArrayLikeAtRandomMain,
	first   : ArrayLikeAtFirstMain,
	last    : ArrayLikeAtLastMain,
	direct  : ArrayLikeAtDirectMain,
	invert  : ArrayLikeAtInvertMain,
}
