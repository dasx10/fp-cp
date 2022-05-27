import type { ArrayLikeIndexOfLastCore } from './../core/index.D';

export interface ArrayLikeIndexOfLastLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeIndexOfLastCore<Type>
}
