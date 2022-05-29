import type { ArrayLikeJoinCore } from './../core/index.D';
export interface ArrayLikeJoinLib <Type extends ArrayLike<unknown> = ArrayLike<unknown>> {
	readonly core: ArrayLikeJoinCore<Type>;
}
