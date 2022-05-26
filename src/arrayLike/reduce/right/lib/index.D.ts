import type { ArrayLikeReduceRightCore } from './../core/index.D';
export interface ArrayLikeReduceRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeReduceRightCore<Type>
}
