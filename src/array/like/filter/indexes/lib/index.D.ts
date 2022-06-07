import { ArrayLikeFilterIndexesReversMain } from './../revers/index.D';
import type { ArrayLikeFilterIndexesCore } from './../core/index.D';
import type { ArrayLikeFilterIndexesRightMain } from './../right/index.D';

export interface ArrayLikeFilterIndexesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFilterIndexesCore       <Type>;
	readonly right : ArrayLikeFilterIndexesRightMain  <Type>;
	readonly revers: ArrayLikeFilterIndexesReversMain <Type>;
}
