import type { ArrayLikeFilterEntriesRightMain } from './../right/index.D';
import type { ArrayLikeFilterEntriesCore }      from './../core/index.D';
import type { ArrayLikeFilterEntriesReversMain } from '../revers/index.D';
export interface ArrayLikeFilterEntriesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core   : ArrayLikeFilterEntriesCore       <Type>;
	readonly right  : ArrayLikeFilterEntriesRightMain  <Type>;
	readonly revers : ArrayLikeFilterEntriesReversMain <Type>;
}
