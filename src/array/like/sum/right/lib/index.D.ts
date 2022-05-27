import type { ArrayLikeSumRightCore } from './../core/index.D';
export interface ArrayLikeSumRightLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>>{
	readonly core: ArrayLikeSumRightCore<Type>
}
