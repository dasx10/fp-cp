import type { ArrayLikeFilterRightCore }        from './../core/index.D';
import type { ArrayLikeFilterIndexesRightMain } from './../../indexes/right/index.D';
import type { ArrayLikeFilterEntriesRightMain } from './../../entries/right/index.D';
import type { ArrayLikeFilterReversRightMain }  from '../../revers/right/index.D';
export interface ArrayLikeFilterRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core    : ArrayLikeFilterRightCore        <Type>;
	readonly indexes : ArrayLikeFilterIndexesRightMain <Type>;
	readonly entries : ArrayLikeFilterEntriesRightMain <Type>;
	readonly revers  : ArrayLikeFilterReversRightMain  <Type>;
}
