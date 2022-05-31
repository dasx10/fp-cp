import type { ArrayLikeFilterIndexesCore } from './../core/index.D';

export interface ArrayLikeFilterIndexesLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeFilterIndexesCore<Type>;
}
