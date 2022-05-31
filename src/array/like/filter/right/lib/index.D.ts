import type { ArrayLikeFilterRightCore } from './../core/index.D';
export interface ArrayLikeFilterRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterRightCore<Type>;
}
