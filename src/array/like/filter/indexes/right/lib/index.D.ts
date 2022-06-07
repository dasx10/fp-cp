import type { ArrayLikeFilterIndexesReversRightMain } from '../../revers/right/index.D';
import type { ArrayLikeFilterIndexesRightCore } from './../core/index.D';
export interface ArrayLikeFilterIndexesRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core   : ArrayLikeFilterIndexesRightCore<Type>;
	readonly revers : ArrayLikeFilterIndexesReversRightMain<Type>;
}
