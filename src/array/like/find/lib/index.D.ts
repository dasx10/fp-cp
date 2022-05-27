import type { ArrayLikeFindCore }      from './../core/index.D';
import type { ArrayLikeFindRightMain } from '../right/index.D';
import type { ArrayLikeFindIndexMain } from './../index/index.D';
import type { ArrayLikeFindEntryMain } from '../entry/index.D';

export interface ArrayLikeFindLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeFindCore      <Type>;
	readonly right : ArrayLikeFindRightMain <Type>;
	readonly index : ArrayLikeFindIndexMain <Type>;
	readonly entry : ArrayLikeFindEntryMain <Type>;
}
