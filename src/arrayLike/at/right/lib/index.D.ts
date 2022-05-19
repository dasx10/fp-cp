import type { ArrayLikeAtLastCore }  from './../../last/index.D';
import type { ArrayLikeAtFirstCore } from './../../first/index.D';
import type { ArrayLikeAtRightCore } from "../core/index.D";

export interface ArrayLikeAtRightLib {
	core  : ArrayLikeAtRightCore;
	last  : ArrayLikeAtFirstCore;
	first : ArrayLikeAtLastCore;
}
