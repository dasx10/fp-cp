import type { ArrayLikeSomeRightMain } from '../right/index.D';
import type { ArrayLikeSomeCore }      from './../core/index.D';

export interface ArrayLikeSomeLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeSomeCore<Type>;
	readonly right : ArrayLikeSomeRightMain<Type>;
}
