import type { ArrayLikeRejectCore } from './../core/index.D';
export interface ArrayLikeRejectLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeRejectCore<Type>
}

