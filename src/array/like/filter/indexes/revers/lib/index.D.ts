import type { ArrayLikeFilterIndexesReversRightMain } from '../right/index.D';
import type { ArrayLikeFilterIndexesReversCore } from './../core/index.D';
export interface ArrayLikeFilterIndexesReversLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>>{
	readonly core  : ArrayLikeFilterIndexesReversCore     <Type>;
	readonly right : ArrayLikeFilterIndexesReversRightMain<Type>;
}
