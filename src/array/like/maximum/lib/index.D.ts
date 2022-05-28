import { ArrayLikeMaximumRightMain } from './../right/index.D';
import type { ArrayLikeMaximumCore } from './../core/index.D';

export interface ArrayLikeMaximumLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeMaximumCore<Type>;
	readonly right : ArrayLikeMaximumRightMain<Type>;
}
