import type { ArrayLikeMaximumRightCore } from './../core/index.D';

export interface ArrayLikeMaximumRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeMaximumRightCore<Type>;
}
