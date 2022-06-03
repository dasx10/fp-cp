import type { ArrayLikeFilterEntriesRightMain } from './../right/index.D';
import type { ArrayLikeFilterEntriesCore } from './../core/index.D';
export interface ArrayLikeFilterEntriesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFilterEntriesCore      <Type>;
	readonly right : ArrayLikeFilterEntriesRightMain <Type>;
}
