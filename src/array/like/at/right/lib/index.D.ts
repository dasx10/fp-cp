import type { ArrayLikeAtFirstCore } from '../../first/core/index.D';
import type { ArrayLikeAtLastCore }  from "../../last/core/index.D";
import type { ArrayLikeAtRightCore } from "../core/index.D";

export interface ArrayLikeAtRightLib {
	readonly core  : ArrayLikeAtRightCore;
	readonly last  : ArrayLikeAtFirstCore;
	readonly first : ArrayLikeAtLastCore;
}
