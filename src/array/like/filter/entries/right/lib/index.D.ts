import type { ArrayLikeFilterEntriesReversRightMain } from './../../revers/right/index.D';
import type { ArrayLikeFilterEntriesRightCore } from './../core/index.D';
export interface ArrayLikeFilterEntriesRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core   : ArrayLikeFilterEntriesRightCore<Type>;
	readonly revers : ArrayLikeFilterEntriesReversRightMain<Type>;
}
