import type { ArrayLikeCountCore }      from "../core/index.D";
import type { ArrayLikeCountRightMain } from './../right/index.D';
import type { ArrayLikeCountValueMain } from "../value/index.D";

export interface ArrayLikeCountLib {
	core  : ArrayLikeCountCore;
	right : ArrayLikeCountRightMain;
	value : ArrayLikeCountValueMain;
}
