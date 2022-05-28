import { ArrayLikeMinimumRightMain } from './../right/index.D';
import type { ArrayLikeMinimumCore } from './../core/index.D';
export interface ArrayLikeMinimumLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core  : ArrayLikeMinimumCore<Type>;
	readonly right : ArrayLikeMinimumRightMain<Type>
}
