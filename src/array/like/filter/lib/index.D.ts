import type { ArrayFilterCore }            from '../core/index.D';

import type { ArrayLikeFilterIndexesMain } from '../indexes/index.D';
import type { ArrayLikeFilterRightMain }   from '../right/index.D';
import type { ArrayLikeFilterEntriesMain } from '../entries/index.D';
import type { ArrayLikeFilterReversMain } from '../revers/index.D';
import type { ArrayLikeCountMain } from '../../count/index.D';

export interface ArrayLikeFilterLib<Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core    : ArrayFilterCore            <Type>;
	readonly right   : ArrayLikeFilterRightMain   <Type>;
	readonly indexes : ArrayLikeFilterIndexesMain <Type>;
	readonly entries : ArrayLikeFilterEntriesMain <Type>;
	readonly revers  : ArrayLikeFilterReversMain  <Type>;
	readonly size    : ArrayLikeCountMain         <Type>;
}
