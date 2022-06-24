import type { ArrayLikeMapReversCore } from './../core/index.D';

export interface ArrayLikeMapReversLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeMapReversCore<Type>
}
