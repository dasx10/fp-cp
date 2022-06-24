import type { ArrayLikeGroupRightMain } from './../right/index.D';
import type { ArrayLikeGroupCore }      from './../core/index.D';

export interface ArrayLikeGroupLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeGroupCore      <Type>;
	readonly right : ArrayLikeGroupRightMain <Type>
}
