import type { ArrayLikeSumCore }      from './../core/index.D';
import type { ArrayLikeSumRightMain } from './../right/index.D';

export interface ArrayLikeSumLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeSumCore<Type>;
	readonly right : ArrayLikeSumRightMain<Type>;
}
