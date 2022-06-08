import type { ArrayLikeFilterEntriesReversRightMain } from './../right/index.D';
import type { ArrayLikeFilterEntriesReversCore } from './../core/index.D';
export interface ArrayLikeFilterEntriesReversLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFilterEntriesReversCore<Type>;
	readonly right : ArrayLikeFilterEntriesReversRightMain<Type>
}
