import type { ArrayLikeMinimumRightCore } from './../core/index.D';
export interface ArrayLikeMinimumRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeMinimumRightCore<Type>;
}
