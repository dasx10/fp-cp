import type { ArrayLikeExcludesLastCore } from './../core/index.D';

export interface ArrayLikeExcludesLastLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeExcludesLastCore<Type>;
}
