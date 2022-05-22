import type { ArrayLikeFindCore }      from './../core/index.D';
import type { ArrayLikeFindRightMain } from '../right/index.D';
import type { ArrayLikeFindIndexMain } from './../index/index.D';

export interface ArrayLikeFindLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	core  : ArrayLikeFindCore      <Type>;
	right : ArrayLikeFindRightMain <Type>;
	index : ArrayLikeFindIndexMain <Type>;
}
