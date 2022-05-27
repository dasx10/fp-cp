import type { ArrayLikeSomeRightCore } from './../core/index.D';
export interface ArrayLikeSomeRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeSomeRightCore<Type>
}
