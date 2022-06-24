import type { ArrayLikeMapReversMain } from '../../map/revers/index.D';
import type { ArrayLikeFilterReversMain } from './../../filter/revers/index.D';

export interface ArrayLikeReversLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly filter : ArrayLikeFilterReversMain <Type>;
	readonly map    : ArrayLikeMapReversMain    <Type>;
}
